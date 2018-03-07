let expect=require('chai').expect
const request=require("request")

it('Main page status', (done) =>{
    request('http://localhost:3000' , (error, response, body)=> {
        expect(response.statusCode).to.equal(200);
        done();
    });
});