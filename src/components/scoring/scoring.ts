export class Scoring {
  private scoreResultNum: number;

  constructor() {
    this.scoreResultNum = 0;
  }

  scoreResult(compare: number, wrongCompare: number, time: number) {
    this.scoreResultNum = (compare - wrongCompare) * 100 - time * 10;
    if (this.scoreResultNum < 0) {
      this.scoreResultNum = 0;
    }
  }

  clearScoreResult() {
    this.scoreResultNum = 0;
  }

  getScoreResult() {
    return this.scoreResultNum;
  }
}
