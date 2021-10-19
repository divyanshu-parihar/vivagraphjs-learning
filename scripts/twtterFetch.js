const Userdata = [
//   {
//     person: "div",
//     follower: "name",
//   },
//   {
//     person: "div",
//     follower: "name1",
//   },
//   {
//     person: "div",
//     follower: "name2",
//   },
//   {
//     person: "div",
//     follower: "name3",
//   },
//   {
//     person: "div1",
//     follower: "name2",
//   },
//   {
//     person: "div",
//     follower: "name3",
//   },
//   {
//     person: "div3",
//     follower: "div2",
//   },
];
function GenerateUsers() {
    for (let i = 0; i < 100; i++) {
        Userdata.push({ "person": "div1", 'follower': i });

  }
}
GenerateUsers();
