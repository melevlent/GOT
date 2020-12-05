const questions = [
	{
		question: 'Who  wrote  the  Game  of  Thrones  Books?',
		answers: [
			{ text: 'R. R. Martin', correct: true },
			{ text: 'J. K. Rowling', correct: false },
			{ text: 'J. R. R. Tolkein', correct: false },
			{ text: 'G. R. Martin', correct: false }
		]
	},
	{
		question: 'Who  created  the  Night  King?',
		answers: [
			{ text: 'The Lord of Light', correct: false },
			{ text: 'The Children of the Forest', correct: true },
			{ text: 'The Drowned God', correct: false },
			{ text: 'The First Men', correct: false }
		]
	},
	{
		question: "What  is  the  Iron  Bank's  representative,  played  by  Mark  Gatiss,  called?",
		answers: [
			{ text: 'Quorin Halfhand', correct: false },
			{ text: 'Tycho Nestoris', correct: true },
			{ text: 'Xaro Xhoan Daxon', correct: false },
			{ text: 'Howard from the Halifax', correct: false }
		]
	},
	{
		question: 'In  the  TV  show,  what  was  Hodor  called  before  he  got  his  tragic  Hodor  nickname?',
		answers: [
			{ text: 'Horys', correct: false },
			{ text: 'Myrys', correct: false },
			{ text: 'Wylis', correct: true },
			{ text: 'Gladys', correct: false }
		]
	},
	{
		question:
			"Who  was  the  leader  of  the  Golden  Company  seelswords  when  Dany  ransacked  King's  landing?",
		answers: [
			{ text: 'Wes Borland', correct: false },
			{ text: 'Kiefer Sutherland', correct: false },
			{ text: 'Robert Westland', correct: false },
			{ text: 'Harry Strickland', correct: true }
		]
	},
	{
		question: "Dany's  dragons  are  (or were)  called,  Viserion  and  _____?",
		answers: [
			{ text: 'Rhaegal', correct: true },
			{ text: 'Dougal', correct: false },
			{ text: 'Vhagar', correct: false },
			{ text: 'Balerion', correct: false }
		]
	},
	{
		question: 'Iwan  Rheon,  who  played  Ramsay  Bolton,  was  almost  cast  as  which  character?',
		answers: [
			{ text: 'Gendry', correct: false },
			{ text: 'Podrick Payne', correct: false },
			{ text: 'Jon Snow', correct: true },
			{ text: 'Robb Stark', correct: false }
		]
	},
	{
		question: "Who  said:  'I  don't  plan  on  knitting  by  the  fire  men  fight  for  me'?",
		answers: [
			{ text: 'Lyanna Mormont', correct: true },
			{ text: 'Sansa Stark', correct: false },
			{ text: 'Ser Brienne of Tarth', correct: false },
			{ text: 'Olenna Tyrell', correct: false }
		]
	},
	{
		question:
			'Which  body  part  did  Kit  Harington  say  was  in  severe  pain  when  filming  the  dragon-riding  scenes  in  season  eight?',
		answers: [
			{ text: 'His right arm', correct: false },
			{ text: 'His right knee', correct: false },
			{ text: 'His right shoulder', correct: false },
			{ text: 'His right testicle', correct: true }
		]
	},
	{
		question:
			'Which  UK  drama  had  hannah  Murray  (Gilly)  and  Joe  Dempsie  (Gendry)  appear  in  together  before  Game  of  Thrones?',
		answers: [
			{ text: 'Misfits', correct: false },
			{ text: 'Skins', correct: true },
			{ text: 'Hollyoaks', correct: false },
			{ text: 'Sugar Rush', correct: false }
		]
	},
	{
		question: 'Which  of  these  characters  is  dead?',
		answers: [
			{ text: "Jaqen J'Gar", correct: false },
			{ text: 'Nymeria the direwolf', correct: false },
			{ text: 'Hot Pie', correct: false },
			{ text: 'Eddison Tollett', correct: true }
		]
	},
	{
		question:
			"What  is  the  name  of  the  giant  dragon-slaying  crossbow  that  failed  to  protect King's  Landing?",
		answers: [
			{ text: 'Millipede', correct: false },
			{ text: "The 'You're Making Me Very Cross(bow)", correct: false },
			{ text: 'Scorpion', correct: true },
			{ text: 'Mantis', correct: false }
		]
	},
	{
		question: 'Where  is  the  House  of  Black  and  White,  the  training  temple  of  the  Faceless  Men?',
		answers: [
			{ text: 'Qarth', correct: false },
			{ text: 'Braavos', correct: true },
			{ text: 'Meereen', correct: false },
			{ text: 'No one knows', correct: false }
		]
	},
	{
		question: "What  was  the  Red  Keep's  chief  mouser  (RIP)  called?",
		answers: [
			{ text: 'Ser Pounce', correct: true },
			{ text: 'Maester Paw', correct: false },
			{ text: 'Lady Claws, forst of her name, breaker of mice, protector of the realm', correct: false },
			{ text: 'The Bastard', correct: false }
		]
	},
	{
		question: 'Which  relative  did  Euron  Greyjoy  murder  to  take  the  Salt  Throne  of  the  Iron  islands?',
		answers: [
			{ text: 'His brother', correct: true },
			{ text: 'His uncle', correct: false },
			{ text: 'His nephew', correct: false },
			{ text: 'His cousin', correct: false }
		]
	},
	{
		question: "What  is  the  name  of  Arya's  sword?",
		answers: [
			{ text: 'Ice', correct: false },
			{ text: 'Pointy', correct: false },
			{ text: 'Fang', correct: false },
			{ text: 'Needle', correct: true }
		]
	},
	{
		question: "In  which  King's  Landing  slum  did  Gendry  grow  up?",
		answers: [
			{ text: 'Flea Bottom', correct: true },
			{ text: 'Rat Bottom', correct: false },
			{ text: "Rhaenys's Hill", correct: false },
			{ text: 'Dragonpit', correct: false }
		]
	},
	{
		question: "Who  was  Ned  Stark's  predecessor  as  Robert  Baratheon's  Hand?",
		answers: [
			{ text: 'Jaime Lannister', correct: false },
			{ text: 'Jon Arryn', correct: true },
			{ text: 'Tywin Lannister', correct: false },
			{ text: 'Ser Jorah Mormont', correct: false }
		]
	},
	{
		question: 'The  actor  who  played  Brother  Ray  also  played  which  antique-loving  TV  scoundrel?',
		answers: [
			{ text: 'David Dickinson', correct: false },
			{ text: 'Del Boy Trotter', correct: false },
			{ text: 'Rodney Trotter', correct: false },
			{ text: 'Lovejoy', correct: true }
		]
	},
	{
		question: 'Who  had  the  honour  of  killing  Petyr  Baelish?',
		answers: [
			{ text: 'Jon Snow', correct: false },
			{ text: 'Sansa Stark', correct: false },
			{ text: 'Brienne', correct: false },
			{ text: 'Arya Stark', correct: true }
		]
	},
	{
		question:
			'In  Westerosian  currency,  the  two  smaller  denominations  of  the  Gold  Dragon  coin  are  the  copper  penny  and  the  ____?',
		answers: [
			{ text: 'Silver stallion', correct: false },
			{ text: 'Golden goose', correct: false },
			{ text: 'Silver stag', correct: true },
			{ text: 'Bronze bull', correct: false }
		]
	},
	{
		question: 'What  is  the  go-to  anaesthetic  for  maesters  across  Westeros  called?',
		answers: [
			{ text: 'Shade of the evening', correct: false },
			{ text: 'Sourleaf', correct: false },
			{ text: 'Having another wine', correct: false },
			{ text: 'Milk of the poppy', correct: true }
		]
	},
	{
		question:
			'Cersei  visited  a  fortune  teller  as  a  teenager  and  got  some  very  bad  news.  What  was  her  name?',
		answers: [
			{ text: 'Jenny the Newt', correct: false },
			{ text: 'Maggie the Frog', correct: true },
			{ text: 'Winnie the Lizard', correct: false },
			{ text: 'Kerry the Kangarillapig', correct: false }
		]
	},
	{
		question: 'The  King  Beyond  the  Wall,  Mance  Rayder,  was  roasted  alive  on  whose  orders?',
		answers: [
			{ text: 'Cersei Lannister', correct: false },
			{ text: 'Daenerys Targaryen', correct: false },
			{ text: 'Stannis Baratheon', correct: true },
			{ text: 'Roose Bolton', correct: false }
		]
	},
	{
		question:
			'What  were  the  first  words  King  Robert  said  to  Ned  Stark  in  episode  one  of  season  one?',
		answers: [
			{ text: "'You've got fat'", correct: true },
			{ text: "'You've not changed", correct: false },
			{ text: "'You look old'", correct: false },
			{ text: "'Your hair looks terrible'", correct: false }
		]
	},
	{
		question: "What  is  the  name  of  Jon  Snow's  Direwolf?",
		answers: [
			{ text: 'Grey Wind', correct: false },
			{ text: 'Graham', correct: false },
			{ text: 'Ghost', correct: true },
			{ text: 'Garagamel', correct: false }
		]
	},
	{
		question: "Name  the  'other'  Stark  child:  Robb,  Brandon,  Sansa,  Arya,  Jon  Snow  and  _____?",
		answers: [
			{ text: 'Rickon', correct: true },
			{ text: 'Dickon', correct: false },
			{ text: 'Ramsay', correct: false },
			{ text: 'Eddard', correct: false }
		]
	},
	{
		question: "What's  The  name  of  Lysa  Arryn's  too-old-to-be-nursing  son?",
		answers: [
			{ text: 'Edmore', correct: false },
			{ text: 'Hoster', correct: false },
			{ text: 'Robin', correct: true },
			{ text: 'Nedwell', correct: false }
		]
	},
	{
		question: 'Which  band  made  a  cameo  appearance  at  the  Purple  Wedding?',
		answers: [
			{ text: 'Sigur Ros', correct: true },
			{ text: 'Arcade Fire', correct: false },
			{ text: 'McBusted', correct: false },
			{ text: 'The National', correct: false }
		]
	},
	{
		question:
			"What's  the  name  of  the  explosive  that  gave  the  Lannisters  the  edge  in  the  Battle  of  Blackwater?",
		answers: [
			{ text: 'Wildfire', correct: true },
			{ text: 'Dragonfire', correct: false },
			{ text: 'Godsfire', correct: false },
			{ text: 'Pantsonfire', correct: false }
		]
	},
	{
		question: "How  was  'The  Queen  of  Thorns'  more  commonly  known?",
		answers: [
			{ text: 'Cersei Lannister', correct: false },
			{ text: 'Margaery Tyrell', correct: false },
			{ text: 'Olenna Tyrell', correct: true },
			{ text: 'E. Jarvis Thribb', correct: false }
		]
	},
	{
		question: "What  does  Daenerys  mean  when  she  says  'Shekh  ma  shieraki  anni'  to  Khal  Drogo?",
		answers: [
			{ text: "'Moon of my life'", correct: false },
			{ text: "'Get in me wheelbarrow, love'", correct: false },
			{ text: "'Sound did silence me'", correct: false },
			{ text: "'My sun and stars'", correct: true }
		]
	},
	{
		question: "What  was  Pycelle's  official  title  in  the  Red  Keep?",
		answers: [
			{ text: 'Master of Coin', correct: false },
			{ text: 'Grand Maester', correct: true },
			{ text: 'Games Maester', correct: false },
			{ text: 'Lord Commander of the Kingsguard', correct: false }
		]
	},
	{
		question: 'Which  Lannister  song  signalled  doom  at  the  Red  Wedding?',
		answers: [
			{ text: 'The Rains of Castermere', correct: true },
			{ text: 'A Golden Crown', correct: false },
			{ text: "The Assassin's Dagger", correct: false },
			{ text: 'Tales of Topographic Oceans', correct: false }
		]
	},
	{
		question:
			"What  piece  of  fencing  advide  did  Jon  Snow  give  to  Arya  Stark?  'Stick  them  with  the...'",
		answers: [
			{ text: 'prickly end', correct: false },
			{ text: 'sharp end', correct: false },
			{ text: 'stabby end', correct: false },
			{ text: 'pointy end', correct: true }
		]
	},
	{
		question: "Who  said:  'Go  drink  until  it  feels  like  you  did  the  right  thing'?",
		answers: [
			{ text: 'Tyrion Lannister', correct: false },
			{ text: 'Bronn', correct: true },
			{ text: 'Lady Arryn', correct: false },
			{ text: 'Kelis', correct: false }
		]
	},
	{
		question: "Who  said:  'Hush,  Hodor!  No  more  Hodoring!'?",
		answers: [
			{ text: 'Bran Stark', correct: true },
			{ text: 'Lord Varys', correct: false },
			{ text: 'Cersei Lannister', correct: false },
			{ text: 'Portmeirion', correct: false }
		]
	},
	{
		question:
			"Who  said:  'It's  not  easy  being  drunk  all  the  time.  Everyone  would  do  it  if  it  were  easy?'",
		answers: [
			{ text: 'Bronn', correct: false },
			{ text: 'King Robert', correct: false },
			{ text: 'Tyrion Lannister', correct: true },
			{ text: 'Dumbledore', correct: false }
		]
	},
	{
		question: "Who  said:  'Hurry,  this  pie  is  dry!'?",
		answers: [
			{ text: 'Lord Commander Mormont', correct: false },
			{ text: 'Barrington Levy', correct: false },
			{ text: 'Tywin Lannister', correct: false },
			{ text: 'Joffrey', correct: true }
		]
	},
	{
		question: "Who  said:  'Chaos  isn't  a  pit.  Chaos  is  a  ladder'?",
		answers: [
			{ text: 'Lord Varys', correct: false },
			{ text: "Petyr Baelish ('Littlefinger')", correct: true },
			{ text: 'Cersei Lannister', correct: false },
			{ text: 'Faris Rotter', correct: false }
		]
	},
	{
		question:
			"Who  said:  'Some  day  I'm  gonna  put  a  sword  through  your  eye  and  out  the  back  of  your  skull'?",
		answers: [
			{ text: 'Theon Greyjoy', correct: false },
			{ text: 'Shae', correct: false },
			{ text: 'Arya Stark', correct: true },
			{ text: 'Anton Yelchin', correct: false }
		]
	},
	{
		question: "Who  said:  'If  you  ever  call  me  sister  again,  I'll  have  you  strangled  in  your  sleep'?",
		answers: [
			{ text: 'Annie Lennox', correct: false },
			{ text: 'Meg White', correct: false },
			{ text: 'Catelyn Stark', correct: false },
			{ text: 'Cersei Lannister', correct: true }
		]
	},
	{
		question: "Who  said:  'You're  shit  at  dying,  you  know  that?'",
		answers: [
			{ text: "Sandor Clegane ('The Hound')", correct: true },
			{ text: 'King Robert', correct: false },
			{ text: 'Travis Bickle', correct: false },
			{ text: 'Harland Sanders', correct: false }
		]
	},
	{
		question: "Who  said:  'Of  all  the  ways  to  kill  you,  poison  would  be  the  last'?",
		answers: [
			{ text: 'Mance Rayder', correct: true },
			{ text: 'Littlefinger', correct: false },
			{ text: 'Bowfinger', correct: false },
			{ text: 'Crast', correct: false }
		]
	},
	{
		question: "Who  said:  'Has  anyone  ever  told  you  you're  as  boring  as  you  are  ugly?'",
		answers: [
			{ text: 'The Hound', correct: false },
			{ text: 'Jaime Lannister', correct: true },
			{ text: 'Jon Snow', correct: false },
			{ text: 'Peter Snow', correct: false }
		]
	},
	{
		question: "Whose  skull  was  cracked  like  an  egg  by  The  Mountain's  giant  hands?",
		answers: [
			{ text: 'Lady the direwolf', correct: false },
			{ text: 'Oberyn Martell', correct: true },
			{ text: 'Beric Dondarrion', correct: false },
			{ text: 'Auric Goldfinger', correct: false }
		]
	},
	{
		question: "Who  was  burned  alive  on  Drogo's  funeral  pyre?",
		answers: [
			{ text: 'Mirri Maz Duur', correct: true },
			{ text: 'Khal Drogo', correct: false },
			{ text: 'Maris Piper', correct: false },
			{ text: 'Septa Mordane', correct: false }
		]
	},
	{
		question: 'Who  had  molten  gold  poured  over  their  head?',
		answers: [
			{ text: 'Robb Stark', correct: false },
			{ text: 'Viserys Targaryen', correct: true },
			{ text: 'Khal Drogo', correct: false },
			{ text: 'Aloo Gobi', correct: false }
		]
	},
	{
		question: 'Who  was  stabbed  in  the  back  by  a  smoke-baby-ghost?',
		answers: [
			{ text: 'Qhorin Halfhand', correct: false },
			{ text: 'Renly Baratheon', correct: true },
			{ text: 'Jory Cassel', correct: false },
			{ text: 'Tony Blackburn', correct: false }
		]
	},
	{
		question: "How  many  actors  have  played  Gregor  Clegane  ('The  Mountain')?",
		answers: [
			{ text: '1', correct: false },
			{ text: '2', correct: false },
			{ text: '3', correct: true },
			{ text: '4', correct: false }
		]
	},
	{
		question:
			'In  season  six,  Kevin  Eldon  appeared  as  an  actor  in  a  theatre  troupe.  Who  was  his  character  portraying  in  the  production?',
		answers: [
			{ text: 'Cersei Lannister', correct: false },
			{ text: 'Ned Stark', correct: true },
			{ text: 'Robert Baratheon', correct: false },
			{ text: 'Tywin Lannister', correct: false }
		]
	},
	{
		question: 'What  is  the  official  Lannister  family  motto?',
		answers: [
			{ text: "'Hear me roar'", correct: true },
			{ text: "'A Lannister always pays his depts'", correct: false },
			{ text: "'None so fierce'", correct: false },
			{ text: "'Never knowingly undersold'", correct: false }
		]
	},
	{
		question:
			'Which  British  comedian  and  actor  portrayed  Red  Priest  of  the  Lord  of  Light,  Thoros  of  Myr?',
		answers: [
			{ text: 'Phill Jupitus', correct: false },
			{ text: 'Danny Kaye', correct: false },
			{ text: 'Paul Kaye', correct: true },
			{ text: 'Peter Kaye', correct: false }
		]
	},
	{
		question: 'Grey  Worm  is  the  leader  of  which  group?',
		answers: [
			{ text: 'The Unthanks', correct: false },
			{ text: 'The Unjust', correct: false },
			{ text: 'The Unsullied', correct: true },
			{ text: 'The Undertones', correct: false }
		]
	},
	{
		question: "What  is  Brienne's  real  surname?",
		answers: [
			{ text: 'Tully', correct: false },
			{ text: 'Tarth', correct: true },
			{ text: 'Gibb', correct: false },
			{ text: 'Utichi', correct: false }
		]
	},
	{
		question: "Which  house's  motto  is  'fire  and  blood'?",
		answers: [
			{ text: 'Greyjoy', correct: false },
			{ text: 'Martel', correct: false },
			{ text: 'Targaryen', correct: true },
			{ text: 'Davro', correct: false }
		]
	},
	{
		question: 'Who  masterminded  the  plot  to  kill  King  Joffrey?',
		answers: [
			{ text: 'Little Mix', correct: false },
			{ text: 'Lord Varys', correct: false },
			{ text: 'Olenna Tyrell', correct: true },
			{ text: 'Rene Artois', correct: false }
		]
	},
	{
		question:
			'Which  popular  fantasy  character  has  been  played  by  two  female  actors  on  Game  of  Thrones?',
		answers: [
			{ text: 'Lara Croft', correct: false },
			{ text: 'Lady Gaga', correct: false },
			{ text: 'Tank Girl', correct: false },
			{ text: 'Sarah Connor', correct: true }
		]
	}
];
