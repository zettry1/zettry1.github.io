//question1
function askPassword(ok, fail) {
  let password = prompt("Password", "");
  if (password === "rockstar") ok();
  else fail();
}
let user = {
  name: "John",
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to login`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(user.loginOk.call(user), user.loginFail.call(user));

//question 2
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach((student) => {
      console.log(this.title + ": " + student);
    });
  },
};
group.showList();
