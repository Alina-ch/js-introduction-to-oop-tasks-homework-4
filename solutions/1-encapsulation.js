// BEGIN
const getMutualFriends = (firstUser, secondUser) => {
  const firstID = firstUser.getFriends().map(({ id }) => id);
  const result = [];
  for (const secondUserFriend of secondUser.getFriends()) {
    if (firstID.includes(secondUserFriend.id)) {
      result.push(secondUserFriend);
    }
  }
  return result;
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});

export {getMutualFriends};
