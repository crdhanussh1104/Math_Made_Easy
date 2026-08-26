/**
 * textbookPdfMap.js
 *
 * Maps class IDs + chapter numbers to the correct NCERT chapter PDF path.
 * PDFs are served from /public/textbooks/<classN>/<prefix><chapterNum>.pdf
 *
 * NCERT file naming convention: {prefix}{chapterNum:02d}.pdf
 *   Class 1  -> aejm1XX  (ch 1-13)
 *   Class 2  -> bejm1XX  (ch 1-11)
 *   Class 3  -> cemm1XX  (ch 1-14)
 *   Class 4  -> (PDF unavailable - wrong files in download)
 *   Class 5  -> eemm1XX  (ch 1-15)
 *   Class 6  -> fegp1XX  (ch 1-10)
 *   Class 7  Part 1 -> gegp1XX (ch 1-8), Part 2 -> gegp2XX (ch 9-15)
 *   Class 8  Part 1 -> hegp1XX (ch 1-7), Part 2 -> hegp2XX (ch 8-14)
 *   Class 9  -> iemh1XX  (ch 1-8)
 *   Class 10 -> jemh1XX  (ch 1-14)
 */

function pad(n) { return String(n).padStart(2, '0'); }

const CLASS_CONFIG = {
  class1:  { folder: 'class1',  prefix1: 'aejm1', maxChapters: 13, splitAt: null },
  class2:  { folder: 'class2',  prefix1: 'bejm1', maxChapters: 11, splitAt: null },
  class3:  { folder: 'class3',  prefix1: 'cemm1', maxChapters: 14, splitAt: null },
  class4:  { folder: 'class4',  prefix1: 'bejm1', maxChapters: 11, splitAt: null },
  class5:  { folder: 'class5',  prefix1: 'eemm1', maxChapters: 15, splitAt: null },
  class6:  { folder: 'class6',  prefix1: 'fegp1', maxChapters: 10, splitAt: null },
  class7:  { folder: 'class7',  prefix1: 'gegp1', maxChapters: 15, splitAt: 8, prefix2: 'gegp2' },
  class8:  { folder: 'class8',  prefix1: 'hegp1', maxChapters: 14, splitAt: 7, prefix2: 'hegp2' },
  class9:  { folder: 'class9',  prefix1: 'iemh1', maxChapters: 8,  splitAt: null },
  class10: { folder: 'class10', prefix1: 'jemh1', maxChapters: 14, splitAt: null },
};

/**
 * Returns the public URL for the NCERT chapter PDF.
 * @param {string} classId  - e.g. 'class6'
 * @param {number} chapterNumber - 1-based chapter number
 * @returns {string|null}
 */
export function getTextbookPdfUrl(classId, chapterNumber) {
  const cfg = CLASS_CONFIG[classId];
  if (!cfg || !cfg.folder || !cfg.prefix1) return null;
  if (chapterNumber < 1 || chapterNumber > cfg.maxChapters) return null;

  let filename;
  if (cfg.splitAt && chapterNumber > cfg.splitAt) {
    // Part 2: restart chapter index from 1
    filename = cfg.prefix2 + pad(chapterNumber - cfg.splitAt) + '.pdf';
  } else {
    filename = cfg.prefix1 + pad(chapterNumber) + '.pdf';
  }

  return '/textbooks/' + cfg.folder + '/' + filename;
}

/**
 * Returns display metadata for a class textbook.
 * @param {string} classId
 * @returns {{ available: boolean, totalChapters: number }}
 */
export function getTextbookMeta(classId) {
  const cfg = CLASS_CONFIG[classId];
  if (!cfg || !cfg.folder) return { available: false, totalChapters: 0 };
  return { available: true, totalChapters: cfg.maxChapters };
}
