import { gql } from '@apollo/client';

// TODO: We're fetching Sports(ID = 2) category for now, This filter will be removed in future
export const GET_CATEGORIES = gql`
  query categories {
    getCategory(ids: 2) {
      id
      name
      iconURL
      activities {
        id
        name
        iconURL
      }
    }
  }
`;

// export const GET_BOOKMARK_INSTITUTION = gql`
//   query {
//     bookmarkInstitutionFind(
//       query: { _limit: 3 }
//     ) {
//       total
//       data {
//         institution {
//           id
//           name
//           country
//         }
//       }
//     }
// }
// `;

export const GET_BOOKMARK_PEOPLE = gql`
  query bookmarkedUsers($cursor: Int!, $take: Int!, $userId: Int!) {
    getBookmarkedUsers(userId: $userId, cursor: $cursor, take: $take) {
      pageEdges {
        node {
          id
          user {
            id
            firstname
            lastname
            username
            profileImage
            dwollaCustomer {
              status
            }
          }
        }
      }
      pageInfo {
        totalCount
        hasNextPage
      }
    }
  }
`;
