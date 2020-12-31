/*
Made By OkeSip
Credit By Numex
*/

var request = require('request')
var rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('IP : ', ip => {
	request.post('http://ip-api.com/json/'+ip, function(err, res, body) {
		if (err) {
			console.log('Your Internet Down')
		}
		else {
			var data = JSON.parse(body)
			console.clear()
			console.log("============================")
			console.log('Status : '+data.status)
			console.log('IP : '+data.query)
			console.log('Country : '+data.country)
			console.log('City : '+data.city)
			console.log('ISP : '+data.isp)
			console.log('Organization : '+data.org)
			console.log('Region : '+data.region)
			console.log('Time Zone : '+data.timezone)
			console.log("============================")
		}
	})
})