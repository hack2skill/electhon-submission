const DemocracyChain = artifacts.require("DemocracyChain");
let democracychain;

contract("Testing Democracy Smart COntract",(accounts)=>{
    before(async()=>{
        democracychain = await DemocracyChain.deployed();
    })
    it("is Giving Election Commission ",async()=>{
        let ec = await democracychain.election_commission();
        assert.equal(ec,accounts[0]);
    })
    it("is creating a poll",async()=>{
        let tx = await democracychain.createPoll("https.nikku.dev","Karnataka","Loksaba Election",  Date.now(),  Date.now()+1000*60*60*24*3,{from:accounts[0]});
        let polls = await democracychain.getPolls();
        assert.equal(polls.length,1);
    });
    it("is updating a poll",async()=>{
        
        let tx = await democracychain.updatePoll(0,"https.nikku.sol","Karnataka","Loksaba Election",  Date.now(),  Date.now()+1000*60*60*24*3,{from:accounts[0]});
        let polls = await democracychain.getPolls();
        assert.equal(polls[0].image,"https.nikku.sol");

    })
    it("is deleting a poll",async()=>{
        let tx = await democracychain.deletePoll(0,{from:accounts[0]});
        let polls = await democracychain.getPolls();
        assert.equal(polls[0].deleted,true);
    })
    it("register a contendor in a given Poll",async()=>{
        let tx1 = await democracychain.register(0,"https://nikku.jr.dev","Neeraj Choubisa",{from:accounts[1]});
        // let tx2 = await democracychain.register(0,"https://harshit.jr.dev","Harshit Choubisa",{from:accounts[3]});
        // let tx3 = await democracychain.register(0,"https://rakesh.jr.dev","Rakesh Choubisa",{from:accounts[3]});
        // let tx4 = await democracychain.register(0,"https://rizwan.jr.dev","Rizwan Choubisa",{from:accounts[4]});
        let polls = await democracychain.getPolls();
        
        assert.equal(polls[0].contestants,1);
    });

    it("Contestents list",async()=>{
        let tx = await democracychain.listContestants(0,{from:accounts[1]});
        assert.equal(tx[0].fullname,"Neeraj Choubisa");
    
    })

    // it("Voter Can Vote",async()=>{
    //     let tx = await democracychain.vote(0,0,{from:accounts[9]});
    //     let tx2 = await democracychain.vote(0,1,{from:accounts[8]});
    //     let tx3 = await democracychain.vote(0,0,{from:accounts[7]});
    //     let contestents = await democracychain.listContestants(0,{from:accounts[1]});
    //     assert.equal(contestents[0].votes,2);
     
    // })

})