## 홀덤 게임 모델링
<ul style = "list-style-type: decimal">
    <li>User : 유저 정보 테이블
    <ul style = "list-style: decimal inside;">
        <li>Id (PK): 아이디 </li>
        <li>Pwd : 비밀번호</li>
        <li>Name :이름</li>
        <li>NickName : 닉네임</li>
        <li>Money: 보유 금액</li>
        <li>state : 유저 상태(탈퇴 :0, 이용중:1, 휴먼: 2)  </li>
    </ul>
    </li>
    <li>Game : 게임 정보 테이블
    <ul style = "list-style: decimal inside;">
        <li>roomNo(PK): 방번호 (autoIncrease)</li>
        <li>UserIdGroupNo(FK: IdGroup) : 방에 참여 중인 유저 아이디 그룹</li>
        <li>HostId(FK:User)</li>
        <li>state : 게임 상태(대기중: 0, 진행중:1, 종료:2, 취소 : 3)</li>
    </ul>
    </li>
    <li> GameDetail : 라운드별 승자, 핸드 정보를 기록해 놓은 테이블
    <ul style = "list-style: decimal inside;">
        <li>roomID(PK+FK : Game) : 방 번호</li>
        <li>roundNo(Pk) : 라운드 번호</li>
        <li>승자 ID(FK: User)</li>
        <li>PotSize: 승자 획득 금액</li>
        <li>winnerHandNo(Fk: Hand) : 승자 핸드</li>
        <li>BoardNo(Fk : Board)
    </ul>
    </li>
    <li> IdGroup : 유저 아이디 그룹 테이블
    <ul style = "list-style: decimal inside;">    
        <li>No(PK) 유저 아이디 그룹 번호:(autoIncrease)</li>
        <li>ur_Id(FK+PK: User) : 방에 함께 참여한 유저 ID</li>
        <li>roomID : 방번호(정렬을 위한 중복 컬럼)</li>
        <li>state: 유저 아이디 그룹 상태 (참여중:0, 관전 : 2, 퇴장 : 3)</li>
    </ul>
    <li> Hand: 핸드 정보 경우의 수를 미리 등록 해 둔 테이블
    <ul style ="list-style:decimal inside;">
        <li>No(PK) : 족보 번호</li>
        <li>FirstCard: 핸드의 첫번째 카드</li>
        <li>SecondCard: 핸드의 두번째 카드</li>
    </ul>
    </li>
    </li>
    <li> Board : 나올 수 있는 보드 경우에 수를 모두 입력해 놓은 테이블
    <ul style = "list-style:decimal inside;">
        <li>No(PK) : 보드 번호</li>
        <li>FirstCard : 보드의 첫번째 카드</li>
        <li>SecondCard : 보드의 두번째 카드</li>
        <li>FlopCard : 보드의 세번째 카드</li>
        <li>Turn: 보드의 네번째 카드</li>
        <li>Liver : 보드의 마지막 카드</li>
    </ul>
    </li>
</ul>

### 개선 필요 사항
1. 게임 상세 : 승자 핸드와 패자 핸드 몇 번째 카드까지 확인 하고 죽었는지 여부 기록 필요