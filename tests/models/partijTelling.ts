interface Candidate {
  index: number;
  votes: number;
}

export interface PartijTelling {
  candidates: Candidate[];
  totalVotes: number;
}