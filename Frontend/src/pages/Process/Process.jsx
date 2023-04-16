import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import main from "../../images/Process_images/6.png";
import quiz1 from "../../images/Process_images/laws.jpg";
import quiz2 from "../../images/Process_images/regis.jpg";
import quiz4 from "../../images/Process_images/2.png";
import quiz5 from "../../images/Process_images/vote.jpg";
import quiz6 from "../../images/Process_images/ballot.jpg";

function Process() {
  return (
    <div>
      <Navbar />
      <p className="font-serif my-[2rem] text-red-500 text-[3rem] font-bold items-center flex justify-center">PROCESS OF ELECTIONS</p>
      <div className="flex gap-[4rem] mt-[1rem] items-center justify-center">
        <div class="block h-[40rem] w-[25rem] rounded-lg bg-white shadow-2xl dark:bg-neutral-700">
          <a href="#!">
            <img class="rounded-t-lg w-[28rem] h-[17rem]" alt="" src={quiz1} />
          </a>
          <div class="p-6">
            <h5 class="mb-2 items-center flex justify-center text-xl font-medium leading-tight text-blue-500">
              LAWS AND POLICIES
            </h5>
            <p class="text-xl">
              Election laws, rules, and policies govern the conduct of
              elections, including voter eligibility, candidate registration,
              campaign finance, polling procedures, and election result
              certification. These regulations vary by jurisdiction, aiming to
              ensure fair, transparent, and inclusive elections, protect voting
              rights, and prevent fraud or misconduct.
            </p>
          </div>
        </div>

        <div class="block h-[40rem] w-[25rem] rounded-lg bg-white shadow-2xl dark:bg-neutral-700">
          <a href="#!">
            <img class="rounded-t-lg h-[17rem] w-[28rem]" alt="" src={quiz2} />
          </a>
          <div class="p-6">
            <h5 class="mb-2 items-center flex justify-center text-xl font-medium leading-tight text-blue-500">
              REGISTRATION
            </h5>
            <p class="text-xl">
              Registration is enrolling for a purpose by providing personal
              information, meeting requirements, and submitting documents. It
              verifies eligibility, enables participation, maintains records,
              and ensures compliance with regulations for individuals,
              organizations, or authorities.
            </p>
          </div>
        </div>

        <div class="block h-[40rem] w-[25rem] rounded-lg bg-white shadow-2xl dark:bg-neutral-700">
          <a href="#!">
            <img class="rounded-t-lg h-[17rem] w-[28rem]" alt="" src={quiz4} />
          </a>
          <div class="p-6">
            <h5 class="mb-2 items-center flex justify-center text-xl font-medium leading-tight text-blue-500">
              PRE-ELECTION
            </h5>
            <p class="text-xl">
              Pre-election day voting, also known as early voting or advance
              voting, allows eligible voters to cast their ballots before the
              official election day through in-person voting at designated
              polling locations, mail-in ballots, or online voting. This aims to
              provide greater accessibility and convenience for voters, reducing
              congestion on election day.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-[4rem] mt-[3rem] items-center justify-center">
        <div class="block h-[38rem] w-[25rem] rounded-lg bg-white shadow-2xl dark:bg-neutral-700">
          <a href="#!">
            <img class="rounded-t-lg w-[28rem] h-[17rem]" alt="" src={quiz5} />
          </a>
          <div class="p-6">
            <h5 class="mb-2 items-center flex justify-center text-xl font-medium leading-tight text-blue-500">
              VOTING DAY
            </h5>
            <p class="text-xl">
              Election day is when eligible voters in a democracy cast their
              ballots to elect candidates for various offices. It occurs at
              polling locations or through mail-in ballots or online voting. The
              outcome of the election on this day shapes future governance and
              is a crucial moment in the democratic process.
            </p>
          </div>
        </div>

        <div class="block h-[39rem] w-[25rem] rounded-lg bg-white shadow-2xl dark:bg-neutral-700">
          <a href="#!">
            <img class="rounded-t-lg h-[17rem] w-[28rem]" alt="" src={quiz6} />
          </a>
          <div class="p-6">
            <h5 class="mb-2 items-center flex justify-center text-xl font-medium leading-tight text-blue-500">
              VOTE COUNT
            </h5>
            <p class="text-xl">
              Ballot counting is the process of tallying the votes cast on
              ballots during an election. It involves sorting, verifying, and
              tabulating the votes to determine the results. Ballot counting can
              be done manually or by using electronic vote counting machines,
              and it is a critical step in the democratic election process to
              determine the winners of the election.
            </p>
          </div>
        </div>

        <div class="block h-[38rem] w-[25rem] rounded-lg bg-white shadow-2xl dark:bg-neutral-700">
          <a href="#!">
            <img class="rounded-t-lg h-[17rem] w-[28rem]" alt="" src={main} />
          </a>
          <div class="p-6">
            <h5 class="mb-2 items-center flex justify-center text-xl font-medium leading-tight text-blue-500">
              RESULTS
            </h5>
            <p class="text-xl">
              Result day in an election is the day when the official outcome of
              the election is announced. It is the culmination of the voting
              process, including ballot counting, and determines the winners of
              the election for various offices. Result day is eagerly
              anticipated by candidates, political parties, and voters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
