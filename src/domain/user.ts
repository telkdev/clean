export type User = {
  id: string;
  username: string;
  email: string;
  searchesCount?: number;
};

// export function hasSearches(user: User): boolean {
//   return user.searchesCount > 0;
// }