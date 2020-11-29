export interface SearchResult<T> {
  data: T[];
  total: number;
  hasMore: boolean;
}
