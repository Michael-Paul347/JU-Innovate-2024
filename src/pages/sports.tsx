
import EventCardSports from '../components/EventCardSports'
import React from 'react'
import EventCard from '../components/EventCard.jsx'
import NewNavBar from '../components/NavBar.jsx'
export default function Technical() {

  const events = [
    {
      "name": "",
      
  
      "alias": "Paintball",
      "image": 'https://i.postimg.cc/L644yF2Q/paintball.png',
      "aboutEvent": "Aim.....shoot.....conquer. Paintball is a challenging team sport that includes strategy, shooting, eliminating, and of course unlimited fun. In this game, generally two (or more) different teams gather in a specially designated area and wage a war against each other.",
      "eventDetail": [
        "Maximum 5 members || 2000/team"
      ],
      "rules": [
        
         "NO BLIND FIRING. No discharging paintball markers outside the designated shooting areas.",
        "No shooting at people not wearing protective equipment. No wiping off paint hits while still  on the field.",
        " No carrying or moving the bunkers or field parts. No knives or other weapons allowed.",
         "No drinks or foods to be carried within playing areas. No foul language should be used.",
        " Once eliminated, raise your gun and arm over your head and move quickly toward the exit.",
        " Put on a Barrel Sleeve prior to exiting the field. If you call  you are out. If you are in doubt, call Paint Check first.",
        " Referees' calls are final. Do not shoot the referees.",
         "All players MUST be wearing Goggles and Face Masks prior to entering playing areas.",
      ],
     
      "coordinators":{"name":'Kanishk Kumawat: 7014525176',"name2":'Raghav Sharma: 8824489129'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Roadies",
      "image": 'https://i.postimg.cc/Cx11KT2n/roadies.png',
      "aboutEvent":" Brain, strength and abilities all come in a single arena. Let your opponent get nervous just by your  moves. Players will participate in various tasks that challenge their physical, social and mental  strength. Participate to experience thrill and fun.",
     
     
      "eventDetail": ["Members: 2 team players ||900/team"],
      "rules": [
        "Each team consists of 2 players .",
        " Each team will compete on a hard track which will consist of different tasks.",
        " It is mandatory to complete all tasks in order to be selected for next round.",
        " Points will be awarded on the basis of timings of tasks completed and faults done by the team.",
        "There would be penalty for every foul made.",
        "Any misbehaviour would lead to disqualification",
        " Proper decorum is mandatory.",
          "Judges decision will be final.",
      ],
     
      "coordinators":{"name":'Suhasini Shaktawat: 9929361100',"name2":'Dushyant Singh: 7357769662'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "TableTennis",
      "image": 'https://i.postimg.cc/mDx2Vcg7/tabletennis.png',
    
      "aboutEvent": "Table tennis is a sport in which two or four players hit a lightweight ball, also known as the ping-pong ball, back and forth across a table using small solid rackets. The game takes place on a hard table divided by a net.",
      "eventDetail": [
        "450/player||Members: 1player"
      ],
      "rules": [
        "Games are played to 11 points.",
      "Players serve two serves each, alternating. A player does not have to win specifically off their own serve in order to win a point.",
      "If a game ties at 10-10, a player must win by 2 points. In this situation, players serve one serve each, alternating.",
    "You must throw the ball up straight, from a flat palm, at least 6inches (16cm).",
    "Your toss and service contact must be behind the table surface (not over).",
    "If the ball hits the net during service, it is a let, the point is replayed.",
    "There is no limit or point deductions for let serves.",
    "Proper decorum is mandatory and judges decision is final."
      ],
      "coordinators":{"name":'Shivesh Patidar: 7426966255',"name2":'Raj Trivedi: 9587260753'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "TreasureHunt",
      "image": 'https://i.postimg.cc/3RgrqKkV/treasurehunt.png',
      "aboutEvent": "It is a game in which each person or team attempts to be first in finding something that has been  hidden, using written directions or clues.",
     
      "eventDetail": [
        "2000/team||Beg ,Borrow and steal.||Members: 4 member team"
      ],
      "rules": [
        "Do not open and look at the clues prior to the announcement that the hunt has started.",
         "Teams must travel on foot.",
         "Teams must stay together.",
         "Teams are free to utilize resources which exist independently of the treasure hunt.",
        " Teams can not use smartphones or mobile internet devices.",
         "Answers on the score sheet should be legible and exact.",
         "All team members must be present when turning in your score sheets.",
         "Proper decorum is mandatory and judges decision will be final."
      ],
      
      "coordinators":{"name":'Monalisha Kalita: 6002317641',"name2":'Ashish Yadav: 9928432872'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Snake Ladder",
      "image": 'https://i.postimg.cc/KjxcSdLz/snake-and-ladder.png',
      "aboutEvent": "Players roll a die and navigate the board. Landing on a ladder advances a player to a square further  up the board, while landing on a snake means they have to go back to a previous square. The aim of the game is to reach the final square.",
      "eventDetail": ["900/per team||Members: 2 players per team"],
      "rules": [
        "Each team must have 2 players.",
       " One player will throw dice and other will be acting as token",
       "Each player puts their token in the 'start here’ space.",
       " If your counter lands at the bottom of a ladder, you can move up to the top of the ladder.",
       "If your counter lands on the head of a snake, you must slide down to the bottom of the snake.",
       "The first player to get to the space that says home is the winner",
       "Proper decorum is mandatory.",
       "Judges decision will be final.",
      ],
      "coordinators":{"name":'Lakhan Singh Ranawat: 6521270702',"name2":'Kanika Chittora: 7413832588'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Live Ludo",
      "image": 'https://i.postimg.cc/43HxzvsJ/live-ludo.png',
      "aboutEvent": "Ludo is a strategy board game , in which the players race their four tokens from start to finish according to the rolls of a single die.",
      
      "eventDetail": ["Members: 5 players per team ||2000/team ",
       
      ],
      "rules": [
        " Players take turns in a clockwise order; 6 throw of the dice starts.",
         "Each throw, the player decides which piece to move. A piece simply moves in a clockwise direction around the track given by the number thrown. If no piece can legally move  according to the number thrown, play passes to the next player.",
         " A throw of 6 gives another turn.",
         "A player must throw a 6 to move a piece from the starting circle onto the first square on the  track. The piece moves 6 squares around the circuit beginning with the appropriately coloured start square (and the player then has another turn).",
        " If a piece lands on a piece of a different colour, the piece jumped upon is returned to its  starting circle.",
        "If a piece lands upon a piece of the same colour, this forms a block. This block cannot be passed or landed on by any opposing piece.",
        " Winning - The first person to move all 4 pieces into the home triangle wins.",
        " Proper decorum is mandatory and judges decision will be final.",
      ],
      
      "coordinators":{"name":'Jhalak Trivedi: 8081194055',"name2":'Govind Jayswal: 7240240686'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Ipl-Auction",
      "image": 'https://i.postimg.cc/t4MgZv0S/ipl.png',
      "aboutEvent": "Cricket is an emotion and everything else is just a game, so let’s build your ‘dream team’ to acquire  the cup of victory. A championship where you tactically make bids and buy the players that will take  you closer to the trophy. So, unite your love for cricket with your expertise in foretelling and financial management",
      "eventDetail": ["Members:- 4 members||1600/team"

      ],
      "rules": [
           "The entire event will be divided in two round:",
            "Each team can have maximum of 4 members.",
            "Each player would have base price as starting price for bidding.",
            " Each player from the auction round will have same ratings from 0 to 100.",
            "Each team will have 100 crores given to them as virtual money to spend for the auction.",
             "Team with the highest sum of player ratings will be the winner.",
             " Proper decorum is mandatory.",
              "Judges decision would be final.",
      ],
     
      "coordinators":{"name":'Navneet Tondwal: 8769039802',"name2":'Manan Nahar: 9257147005'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": " – "
      }
    },
    {
      "name": "",
      "alias": "Gully Cricket",
      "image": 'https://i.postimg.cc/m2Tk0FNw/gully-cricket.png',
      "aboutEvent": "Gully cricket is an unofficial form of cricket originating mainly from India",
      "eventDetail": [
       "Members:- 7 members including one girl mandatory||2800/team"
      ],
      "rules": [
         "It is mandatory to have one girl in team.",
         "Only Captain, Vice captain and girls can hit sixes.",
         "First ball = Trial ball.",
        " If the girl is a bowler, then the batsman has to play with his opposite batting stance.",
         "If the girl bats then the bowler will have to bowl underarm.",
         "If the ball goes far out of reach or is lost then the batsman is held responsible.",
         "Proper decorum is mandatory.",
        " Judges decision will be final",
      ],
      
      "coordinators":{"name":'Aditya Kumar Pandey: 9414669689',"name2":'Chandan Sharma: 8890264530'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Futsal",
      "image": 'https://i.postimg.cc/FH89sfcw/futsal.png',
      "aboutEvent": "Futsal is a variation of mini football. It is played between two teams of five players each, one of whom is the goalkeeper.",
      
      "eventDetail": ["Minimum 5 players Maximum 8 players || 2000/team",
      
     
      ],
      "rules": [
        " There’ll be a total of 8 players in each team playing on a size of 5-a-side football pitch",
         "All the teams must take the field with 5 players, the remaining 3 will be the rolling substitutes",
        "Each match will be of 33 minutes in total, leading with 15 minutes halves and a 3 minutes break in between",
        "In case of tie, 5 penalties will be announced to each team. There’ll be knock out matches",
        "All players must wear the same colour jerseys other than the keeper.",
        "Any kind of misbehaviour will lead to direct disqualification.",
        "Wearing any ornaments or piercings is strictly prohibited.",
        "Normal outside and corner kicks are allowed. There are No offside.",        

      ],
      "coordinators":{"name":'Mudit Sharma: 9509420635',"name2":'Naman: 9928077526'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Basketball",
      "image": 'https://i.postimg.cc/C1VSkWcN/basketball.png',
      "aboutEvent": "3x3 basketball is a variation of basketball played three-a-side, with one backboard and in a half-court setup",
      
      "eventDetail": [
        "1600/team || Minimum 3 Team members  Maximum 4 Team members"
        
      ],
      "rules": [
        "Team Roaster : 4 players ,3+1 substitute",
        " Game duration & Score Limit : 1x 10 minutes, regular playing time score limit: 21 points.",
        "Free throw(s) following a shooting foul : 1 free throw ,2 free throws ,if foul committed  behind the arc.",
       
        " Foul limit per team : 6 teams fouls Penalty for team fouls 7,8 & 9 : 2 free throws.",
        "  In dead ball situations, prior to the check ball.",
        " The substitute can enter the game after his teammate steps off the court behind the end line opposite the basket.",
        "Substitutions required  opposite the basket.",
       
        " Substitutions require no action from the referees or table officials.",
        " Proper decorum is mandatory and judges decision will be final.",
       
      ],
     
      "coordinators":{"name":'Teesha Sharma: 7568342366',"name2":'Pawan Kumar: 8003983327'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Chess",
      "image": 'https://i.postimg.cc/X7xq37s0/chess.png',
      "aboutEvent": "Chess is an abstract strategy game. It is played on a square chessboard with 64 squares arranged in an eight-by-eight grid. At the start, each player one controlling the white pieces,the other controlling the black pieces controls sixteen pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns The object of the game is to checkmate",
    

     
      "eventDetail": [
       "450/player|| Members: 1 player"
      ],
      "rules": [
        "Tournament format will be finalized after the possible number of participants is determined.",
         "Understand Check and the ways to get out of check (move, block, capture).",
        " Understand the “touch-move” rule.",
         "Understand 50 moves draw rule i.e. the game can be claimed drawn after 50 moves if there are no pawn moves or no captures.",
        
         "The game can be claimed drawn if the exact same position is repeated thrice.",
        " No outside assistance during games is allowed.",
         "Proper decorum is mandatory.",
        " Judges decision is final.",
      ],
      "coordinators":{"name":'Hemendra Singh: 8690818042',"name2":'Shubham Kumar: 8696176787'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    
  ]

  return (
    <>
      
      <div className=" bg-dot-white/[0.2] z-50" style={{backgroundColor:"black"}}>
      <div className="pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       <NewNavBar />
      <div className='flex flex-col text-center justify-center gap-10 mt-6'>
        <div className='team2 text-6xl'>
          <p className='m-2'>SPORTS</p>
        </div>
        <div className='flex flex-col mx-16 md:grid gap-10'>
          {events.map((element, index) => (
            <EventCardSports
              key={index}
              title={element.alias}
              image={element.image}
              date={element.schedule.day}
              time={element.schedule.time}
              venue={element.schedule.venue}
              about={element.aboutEvent}
              details={element.eventDetail}
              rules={element.rules}
              coordinator1={element.coordinators.name}
              coordinator2={element.coordinators.name2}
            />
          ))}
        </div>
      </div>   </div> 
    </>
  )
}
