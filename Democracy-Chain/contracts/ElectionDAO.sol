// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract ElectionDAO{

    address public electionCommissionHead;
    constructor(){
        electionCommissionHead=msg.sender;
    }
    //create Investment proposal 
    struct Proposal{
        uint id;
        string name;
        string description;
        uint votes;
        uint end;
        address[] voters;
        bool completed;
        bool accepted ;
    }
    struct ECMember{
        uint id;
        string name;
        string position;
        address addr;
        bool registered;     
    }

    mapping(uint=>Proposal) public proposals;
    mapping(address=>ECMember) public registeredECMembers;
    Proposal[] private proposalList;
    uint private nextId;
    uint private memberID;
    mapping(address=>mapping(uint=>bool)) public votes;

    modifier alreadyRegistered(){
        require(!registeredECMembers[msg.sender].registered,"You are already an registered for EC Member");
        _;
    }
    function registeredMembers(string memory name,string memory position) public alreadyRegistered{
        ECMember memory ecmember;
        ecmember.id=memberID;
        ecmember.name=name;
        ecmember.position=position;
        ecmember.addr=msg.sender;
        ecmember.registered=true;
        registeredECMembers[msg.sender]=ecmember;
        memberID++;
    } 
    modifier onlyECMember(){
        require(registeredECMembers[msg.sender].registered,"You are not and Ec member");
        _;
    }
    function createProposal(string calldata _name ,string memory _desc , uint duration) external onlyECMember {
        
        address[] memory _voters;
        Proposal memory newProposal = Proposal({
            id:nextId,
            name:_name,
            description:_desc,
            votes:0,
            end:block.timestamp + duration,
            voters:_voters,
            completed:false,
            accepted:false
        });

        proposals[nextId]=newProposal;
        proposalList.push(newProposal);
        nextId++;

    }

    function voteProposal(uint id) external onlyECMember  {
        require(votes[msg.sender][id]==false,"You cannot vote double time ");
        require(block.timestamp<proposals[id].end,"Proposal is  end");
        votes[msg.sender][id]=true;
        proposals[id].votes+=1;
        proposals[id].voters.push(msg.sender);
    }

    function allProposals() external view returns(Proposal[] memory){
        return proposalList;
    }
    


}