
import axios from 'axios';
import { expect } from 'chai';


describe('Check Dogs API', () => {

    let breedId: string;
    let name: string;
    let groupId: string;
    let groupName: string;

    describe('Check status for GET facts', () => {
        it('Returns status code 200', async () => {
            const response = await axios.get('https://dogapi.dog/api/v1/facts?number=1');
            expect(response.status).to.equal(200);
            expect(response.data).to.not.be.empty;
            expect(response.data.success).to.be.true;
        });
    });

    describe('Check for GET breeds', () => {
        it('Returns status code 200', async () => {
            const response = await axios.get('https://dogapi.dog/api/v2/breeds?page[size]=10');
            const obj = response.data;
            console.log(obj.data);
            expect(response.status).to.equal(200);
            expect(response.data).to.not.be.empty;
            expect(obj.data.length).to.equal(10);
            expect(obj.data[0].type).to.equal('breed');
            breedId = obj.data[0].id;
            name = obj.data[0].attributes.name;
        });

        it('Get breed by Id', async () => {
            const response = await axios.get(`https://dogapi.dog/api/v2/breeds/${breedId}`);
            const obj = response.data;
            expect(response.status).to.equal(200);
            expect(response.data).to.not.be.empty;
            expect(obj.data.id).to.equal(breedId);
            expect(obj.data.attributes.name).to.equal(name);
        });
    });

    describe('Check status for GET groups', () => {
        it('Returns status code 200', async () => {
            const response = await axios.get('https://dogapi.dog/api/v2/groups');
            const obj = response.data;
            expect(response.status).to.equal(200);
            expect(obj).to.not.be.empty;
            expect(obj.data[0].type).to.equal('group');
            groupId = obj.data[0].id;
            groupName = obj.data[0].attributes.name;
        });

        it('Get group by Id', async () => {
            const response = await axios.get(`https://dogapi.dog/api/v2/groups/${groupId}`);
            const obj = response.data;
            expect(response.status).to.equal(200);
            expect(obj.data.id).to.equal(groupId);
            expect(obj.data.attributes.name).to.equal(groupName);
        });
    });

});

