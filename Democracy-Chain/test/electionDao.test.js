const ElectionDAO = artifacts.require("./ElectionDAO.sol");
let electionDaoInstance;

contract("ElectionDAO Contract Testing ", accounts => {
    beforeEach(async () => {
        electionDaoInstance= await ElectionDAO.deployed();
    }); 
    it("Should print Election COMMISSION HEAD Address", async () => {
        assert.equal(await electionDaoInstance.electionCommissionHead(), accounts[0]);
    })

    it("Should register a EC member", async () => {
        let tx = await electionDaoInstance.registeredMembers("Neeraj Choubisa","EC Member 1",{from:accounts[1]});
        let tx1 = await electionDaoInstance.registeredMembers("Yashu Choubisa","EC Member 2",{from:accounts[2]});
        let tx2 = await electionDaoInstance.registeredMembers("Karan Choubisa","EC Member 3",{from:accounts[3]});
        let tx3 = await electionDaoInstance.registeredMembers("Pooja Choubisa","EC Member 4",{from:accounts[4]});
    
        let data = await electionDaoInstance.registeredECMembers(accounts[1]);

        assert.equal(data.name,"Neeraj Choubisa")

    });


    it("Should be able to create a new election", async () => {
        const firstProposal ={
            name:"Issue 1",
            description:"Facing this issue for the first time"
        }
        const secondProposal ={
            name:"Issue 2",
            description:"Facing this issue for the second time"
        }
        let tx = await electionDaoInstance.createProposal(firstProposal.name,firstProposal.description,36000,{from:accounts[1]});
        let tx1 = await electionDaoInstance.createProposal(secondProposal.name,secondProposal.description,72000,{from:accounts[3]});

        let proposal = await electionDaoInstance.proposals(0);
        assert.equal(proposal.name,firstProposal.name);
    })

    it("Should give all proposal names", async () =>{
        let names = await electionDaoInstance.allProposals();
        console.log(names)
        assert.equal(names[0].name, "Issue 1");
        assert.equal(names[1].name, "Issue 2");
    })
})