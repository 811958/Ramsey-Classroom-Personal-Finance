javascript:var a = JSON.parse(localStorage.getItem("ramsey"));
[...document.getElementsByClassName("gzl-FormField")].forEach(x => {
	var ans = x.children[1].firstChild.children;
	var tans = [...ans].map(x => x.innerText);
	var p = a.find(e => e[0] == x.firstChild.innerText && tans.includes(e[1]));
	if(p) ans[tans.indexOf(p[1])].firstChild.click();
});
