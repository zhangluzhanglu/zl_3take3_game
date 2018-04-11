/*---------------------------------------------------------------------------
运行示例：
getSuccessResult(
‘x’,
[ 
  [‘o’, ‘e’, ‘e’],

  [‘o’, ‘x’, ‘o’],

  [‘x’, ‘x’, ‘e’] 
]
)
// return [ [2, 2], [0, 1], [0, 2] ]
// 胜利规则：3 x 3 的井字棋游戏三颗棋连成一条线就算胜利。
----------------------------------------------------------------------------*/

 
/* 

  算法：
       由于三3 x 3 的井字棋的胜利路径能很简单的推算出来：即横三，数三，斜三，所以，可以采取遍历法。
  具体过程：
       先提前把所有胜利的路径坐标给出，然后在用当前棋盘中棋子去匹配坐标，根据胜利路径坐标来返回结果。
	   
*/

//传入参数为棋手与棋盘，棋手为x或o表示，棋盘已一个二维数组表示

let getSuccessResult=(player,board)=>{  

 successWays=[          //声明一个三维数组来存储所有可能的胜利结果：共8种，
 
 [[0,0],[0,1],[0,2]],  //横三胜利路径坐标：3种
 [[1,0],[1,1],[1,2]],
 [[2,0],[2,1],[2,2]],
 [[0,0],[1,0],[2,0]],  //竖三胜利路径坐标: 3种
 [[0,1],[1,1],[2,1]],
 [[0,2],[1,2],[2,2]],
 [[0,0],[1,1],[2,2]],  //斜三胜利路径坐标: 3种
 [[2,0],[1,1],[0,2]],
 
 ]
 //声明一个结果数组
 let results=[];
 
 //一个循环得到所有的结果
 for(let i in successWays)
 {
   let res=0;//标志每条成功路径，已落的棋子数目，或1或2或3
   let empty=[]; //获取值每条胜利路径中的空缺点坐标
   
   for(let j in successWays[i])
    {
	   //获取每条胜利路径中每个点的坐标
	   let x=successWays[i][j][0];
	   let y=successWays[i][j][1];
	   
	   //开始具体的判断：判断当前坐标是否已经有棋手落子
	   if(board[x][y]==player) res++; //,若有，标志变量res就加1
	   else{
		   if(board[x][y]=='e')empty=[x,y];//若无，再判断此位置是否为空，如果为空，就将这个点的坐标放入到empty中去
	   }
	   
    }
  //开始判断当前路径是否能够胜利：如果在每条可能的胜利路径下，有两个点都已经落子，且第三个点是可以落子的空位。那么就说明这个空位点坐标是我们想要的结果之一。
  if(res==2&&empty.length==2) results.push(empty);
 
 }
 
 //返回最后的结果
 return results;
 
}