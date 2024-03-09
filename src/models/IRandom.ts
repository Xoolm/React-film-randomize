export interface IRandom {
  result: {
    random: {
      data: number;
    };
  };
}

export interface Root<T> {
  jsonrpc: string;
  result: T;
  id: number;
}

export interface Result {
  random: Random;
  bitsUsed: number;
  bitsLeft: number;
  requestsLeft: number;
  advisoryDelay: number;
}

export interface Random {
  data: number;
  completionTime: string;
}
