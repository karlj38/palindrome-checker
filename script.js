function palindrome(str) {
  console.log("begin");
  let string = str.toLowerCase();
  string = string.replace(/[^a-z0-9]/g, "");
  let arr = string.split("");
  let rev = [...arr].reverse().join("");
  return (string === rev) ? true : false;
}
