export default function ArticleBody({ blocks }) {
  // Strip pull-quote blocks; re-insert at calculated positions based on word count
  const contentBlocks = blocks.filter(b => b.t !== 'pq');
  const candidatePqs = blocks
    .filter(b => b.t === 'pq')
    .filter(pq => (pq.v || '').trim().split(/\s+/).filter(Boolean).length >= 40);

  const wordCount = contentBlocks
    .map(b => b.v || '')
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  // > 2 000 words → 3 pull quotes; > 1 200 words → 2; otherwise → 1
  const maxPqs = wordCount > 2000 ? 3 : wordCount > 1200 ? 2 : 1;
  const selectedPqs = candidatePqs.slice(0, maxPqs);

  // Evenly-spaced insertion points: 1/(n+1), 2/(n+1), … n/(n+1) through content
  const insertAfterIdx = selectedPqs.map((_, i) =>
    Math.max(0, Math.round(contentBlocks.length * ((i + 1) / (selectedPqs.length + 1))) - 1)
  );

  const pqMap = {};
  insertAfterIdx.forEach((blockIdx, pqIdx) => {
    pqMap[blockIdx] = pqMap[blockIdx] || [];
    pqMap[blockIdx].push(selectedPqs[pqIdx]);
  });

  const mergedBlocks = [];
  contentBlocks.forEach((block, i) => {
    mergedBlocks.push(block);
    if (pqMap[i]) pqMap[i].forEach(pq => mergedBlocks.push(pq));
  });

  let firstP = true;

  return (
    <div className="article-body">
      {mergedBlocks.map((block, i) => {
        if (block.t === 'p') {
          const isFirst = firstP;
          if (firstP) firstP = false;
          return (
            <p key={i} className={isFirst ? 'drop-cap' : undefined}>
              {block.v}
            </p>
          );
        }

        if (block.t === 'h') return <h2 key={i}>{block.v}</h2>;
        if (block.t === 'h3') return <h3 key={i}>{block.v}</h3>;

        if (block.t === 'pq') {
          return (
            <blockquote key={i} className="article-pull-quote">
              <p>{block.v}</p>
            </blockquote>
          );
        }

        if (block.t === 'q') {
          return (
            <blockquote key={i} className="article-pull-quote">
              <p>{block.v}</p>
            </blockquote>
          );
        }

        if (block.t === 'stat') {
          return (
            <div key={i} className="article-stat-band">
              {block.stats.map((s, j) => (
                <div key={j} className="stat-band-item">
                  <span className="stat-band-number">{s.number}</span>
                  <span className="stat-band-label">{s.label}</span>
                </div>
              ))}
            </div>
          );
        }

        if (block.t === 'divider') {
          return (
            <div key={i} className="article-section-divider">
              &#9670; &#9670; &#9670;
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
