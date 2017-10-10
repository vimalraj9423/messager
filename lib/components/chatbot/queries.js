var forUserList =
  'select uid,log from chatlogs where uid!=0 group by uid order by log,uid'

//view

var userListView = `select uid,(select Cust2User from chatlogs as s where s.uid=p.UID  order by s.log desc,s.id desc limit 1) as Cust2User,(select message from chatlogs as s where s.uid=p.UID  order by s.log desc,s.id desc limit 1) as message,
  (select log from chatlogs as s where s.uid=p.UID  order by s.log desc limit 1) as log from chatlogs as p group by p.uid order by log desc`

//with user data
var userData = `SELECT user_register.*,userList.* FROM user_register right join (select uid,(select Cust2User from chatlogs as s where s.uid=p.UID  order by s.log desc,s.id desc limit 1) as Cust2User,(select message from chatlogs as s where s.uid=p.UID  order by s.log desc,s.id desc limit 1) as message,
  (select log from chatlogs as s where s.uid=p.UID  order by s.log desc limit 1) as log from chatlogs as p group by p.uid order by log desc) as userList on user_register.reg_id=userList.UID;

`
