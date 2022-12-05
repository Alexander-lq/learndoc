import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,e as d,d as r,w as e,a as n,b as s,r as u}from"./app.4032f898.js";const v={},b=n("p",null,[n("code",null,"redis配置&启动")],-1),p=n("h2",{id:"配置-redis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置-redis","aria-hidden":"true"},"#"),s(" 配置 redis")],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`修改 /usr/local/redis-4.0.6 目录下的 redis.conf 文件
redis配置详解
`),n("span",{class:"token comment"},"# 默认情况下，redis不是在后台模式运行的，如果需要在后台进程运行，把该项的值更改为yes，默认为no"),s(`
daemonize no
`),n("span",{class:"token comment"},"#redis服务以后台进程运行的时候，Redis默认会把pid写入/var/run/redis.pid文件组"),s(`
pidfile /var/run/redis.pid
`),n("span",{class:"token comment"},"# 指定redis监听端口，默认为6379"),s(`
port `),n("span",{class:"token number"},"6379"),s(`
`),n("span",{class:"token comment"},"# 指定redis只接收来自于该IP地址的请求，如果不进行设置，默认将处理所有请求，我们是在生产环境下，所以这是必备项"),s(`
`),n("span",{class:"token builtin class-name"},"bind"),s(),n("span",{class:"token number"},"10.160"),s(`.29.5
`),n("span",{class:"token comment"},"# 设置客户端连接时的超时时间，单位为秒。当客户端在这段时间内没有发出任何指令，那么关闭该连接"),s(`
`),n("span",{class:"token function"},"timeout"),s(),n("span",{class:"token number"},"2"),s(`
`),n("span",{class:"token comment"},"# 指定日志记录级别"),s(`
`),n("span",{class:"token comment"},"# Redis总共支持四个级别：debug、verbose、notice、warning，默认为verbose"),s(`
`),n("span",{class:"token comment"},"# debug  记录很多信息，用于开发和测试"),s(`
`),n("span",{class:"token comment"},"# varbose 很多精简的有用信息，不像debug会记录那么多"),s(`
`),n("span",{class:"token comment"},"# notice 普通的verbose，常用于生产环境"),s(`
`),n("span",{class:"token comment"},"# warning 只有非常重要或者严重的信息会记录到日志"),s(`
loglevel verbose
`),n("span",{class:"token comment"},"# 可用数据库数，默认值为16，默认数据库存储在DB 0号ID库中，无特殊需求，建议仅设置一个数据库 databases 1"),s(`
databases `),n("span",{class:"token number"},"16"),s(`
`),n("span",{class:"token comment"},"# 把数据库存到磁盘上:"),s(`
`),n("span",{class:"token comment"},"#   下面的例子将会进行把数据写入磁盘的操作:"),s(`
`),n("span",{class:"token comment"},"#   900秒(15分钟)之后，且至少有1个key(次)变更"),s(`
`),n("span",{class:"token comment"},"#   300秒(5分钟)之后，且至少有10个key(次)变更"),s(`
`),n("span",{class:"token comment"},"#   60秒之后，且至少有10000个key(次)变更"),s(`
`),n("span",{class:"token comment"},'#   注意：如果不需要写磁盘，则把所有 "save" 设置注释掉，即实现全内存服务器。'),s(`
save `),n("span",{class:"token number"},"900"),s(),n("span",{class:"token number"},"1"),s(`
save `),n("span",{class:"token number"},"300"),s(),n("span",{class:"token number"},"10"),s(`
save `),n("span",{class:"token number"},"60"),s(),n("span",{class:"token number"},"10000"),s(`
`),n("span",{class:"token comment"},"# 数据库的文件名及存放路径"),s(`
dbfilename rdbfile.rdb
`),n("span",{class:"token comment"},"# 工作目录"),s(`
`),n("span",{class:"token comment"},'# 本地数据库会写到这个目录下，文件名就是上面的 "dbfilename" 的值。'),s(`
`),n("span",{class:"token function"},"dir"),s(` /usr/local/rdbfile
`),n("span",{class:"token comment"},"# 主从同步。通过 slaveof 配置来实现Redis实例的备份。"),s(`
`),n("span",{class:"token comment"},"# 当本机为从服务时，设置主服务的IP及端口，在Redis启动时，它会自动从主服务进行数据同步"),s(`
slaveof
`),n("span",{class:"token comment"},"#当本机为从服务时，设置主服务的连接密码"),s(`
`),n("span",{class:"token comment"},"# masterauth"),s(`
`),n("span",{class:"token comment"},"# 当一个slave失去和master的连接，或者同步正在进行中，slave的行为有两种可能："),s(`
`),n("span",{class:"token comment"},'# 1) 如果 slave-serve-stale-data 设置为 "yes" (默认值)，slave会继续响应客户端请求，可能是正常数据，也可能是还没获得值的空数据。'),s(`
`),n("span",{class:"token comment"},'# 2) 如果 slave-serve-stale-data 设置为 "no"，slave会回复"正在从master同步(SYNC with master in progress)"来处理各种请求，除了 INFO 和 SLAVEOF 命令。'),s(`
slave-serve-stale-data `),n("span",{class:"token function"},"yes"),s(`
`),n("span",{class:"token comment"},"# slave根据指定的时间间隔向服务器发送ping请求。"),s(`
`),n("span",{class:"token comment"},"# 时间间隔可以通过 repl_ping_slave_period 来设置。"),s(`
`),n("span",{class:"token comment"},"# 默认10秒"),s(`
repl-ping-slave-period `),n("span",{class:"token number"},"5"),s(`
`),n("span",{class:"token comment"},"# 设置最大同时连接客户端数量，0表示没有限制，一旦达到这个限制，Redis会关闭所有新连接并发送错误达到最大用户数上限。"),s(`
maxclients `),n("span",{class:"token number"},"1024"),s(`
`),n("span",{class:"token comment"},"# 设置最大内存，达到最大内存设置后，Redis会先尝试清除已到期或即将到期的Key，当此方法处理后，任到达最大内存设置，将无法再进行写入操作。"),s(`
maxmemory `),n("span",{class:"token number"},"10240000000"),s(`分配10G内存
`),n("span",{class:"token comment"},"# 内存策略：如果达到内存限制了，Redis如何删除key。你可以在下面五个策略里面选："),s(`
`),n("span",{class:"token comment"},"# volatile-lru -> 根据LRU算法生成的过期时间来删除。"),s(`
`),n("span",{class:"token comment"},"# allkeys-lru -> 根据LRU算法删除任何key。"),s(`
`),n("span",{class:"token comment"},"# volatile-random -> 根据过期设置来随机删除key。"),s(`
`),n("span",{class:"token comment"},"# allkeys->random -> 无差别随机删。"),s(`
`),n("span",{class:"token comment"},"# volatile-ttl -> 根据最近过期时间来删除(辅以TTL)"),s(`
`),n("span",{class:"token comment"},"# noeviction -> 谁也不删，直接在写操作时返回错误。"),s(`
maxmemory-policy noeviction
`),n("span",{class:"token comment"},"# 开启累加模式,因为redis本身同步数据文件是按上面save条件来同步的，所以有的数据会在一段时间内只存在于内存中，这种情况下，当Redis宕机的时候，最新的数据就丢了。"),s(`
`),n("span",{class:"token comment"},"#如果不希望丢掉任何一条数据的话就该用纯累加模式：一旦开启这个模式，Redis会把每次写入的数据在接收后都写入 appendonly.aof 文件。"),s(`
appendonly `),n("span",{class:"token function"},"yes"),s(`
`),n("span",{class:"token comment"},'# 设置纯累加文件名字及保存路径，默认："appendonly.aof"'),s(`
appendfilename appendonly.aof
`),n("span",{class:"token comment"},"# Redis慢查询日志可以记录超过指定时间的查询。运行时间不包括各种I/O时间。"),s(`
slowlog-log-slower-than `),n("span",{class:"token number"},"10000"),s(`
`),n("span",{class:"token comment"},"#密码，默认是注释掉的，即不需要密码，注释打开，后面修改为自己的密码"),s(`
requirepass foobared
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`修改目录下的 redis.conf 文件
redis配置详解
`),n("span",{class:"token comment"},"# 默认情况下，redis不是在后台模式运行的，如果需要在后台进程运行，把该项的值更改为yes，默认为no"),s(`
daemonize no
`),n("span",{class:"token comment"},"#redis服务以后台进程运行的时候，Redis默认会把pid写入/var/run/redis.pid文件组"),s(`
pidfile /var/run/redis.pid
`),n("span",{class:"token comment"},"# 指定redis监听端口，默认为6379"),s(`
port `),n("span",{class:"token number"},"6379"),s(`
`),n("span",{class:"token comment"},"# 指定redis只接收来自于该IP地址的请求，如果不进行设置，默认将处理所有请求，我们是在生产环境下，所以这是必备项"),s(`
`),n("span",{class:"token builtin class-name"},"bind"),s(),n("span",{class:"token number"},"10.160"),s(`.29.5
`),n("span",{class:"token comment"},"# 设置客户端连接时的超时时间，单位为秒。当客户端在这段时间内没有发出任何指令，那么关闭该连接"),s(`
`),n("span",{class:"token function"},"timeout"),s(),n("span",{class:"token number"},"2"),s(`
`),n("span",{class:"token comment"},"# 指定日志记录级别"),s(`
`),n("span",{class:"token comment"},"# Redis总共支持四个级别：debug、verbose、notice、warning，默认为verbose"),s(`
`),n("span",{class:"token comment"},"# debug  记录很多信息，用于开发和测试"),s(`
`),n("span",{class:"token comment"},"# varbose 很多精简的有用信息，不像debug会记录那么多"),s(`
`),n("span",{class:"token comment"},"# notice 普通的verbose，常用于生产环境"),s(`
`),n("span",{class:"token comment"},"# warning 只有非常重要或者严重的信息会记录到日志"),s(`
loglevel verbose
`),n("span",{class:"token comment"},"# 可用数据库数，默认值为16，默认数据库存储在DB 0号ID库中，无特殊需求，建议仅设置一个数据库 databases 1"),s(`
databases `),n("span",{class:"token number"},"16"),s(`
`),n("span",{class:"token comment"},"# 把数据库存到磁盘上:"),s(`
`),n("span",{class:"token comment"},"#   下面的例子将会进行把数据写入磁盘的操作:"),s(`
`),n("span",{class:"token comment"},"#   900秒(15分钟)之后，且至少有1个key(次)变更"),s(`
`),n("span",{class:"token comment"},"#   300秒(5分钟)之后，且至少有10个key(次)变更"),s(`
`),n("span",{class:"token comment"},"#   60秒之后，且至少有10000个key(次)变更"),s(`
`),n("span",{class:"token comment"},'#   注意：如果不需要写磁盘，则把所有 "save" 设置注释掉，即实现全内存服务器。'),s(`
save `),n("span",{class:"token number"},"900"),s(),n("span",{class:"token number"},"1"),s(`
save `),n("span",{class:"token number"},"300"),s(),n("span",{class:"token number"},"10"),s(`
save `),n("span",{class:"token number"},"60"),s(),n("span",{class:"token number"},"10000"),s(`
`),n("span",{class:"token comment"},"# 数据库的文件名及存放路径"),s(`
dbfilename rdbfile.rdb
`),n("span",{class:"token comment"},"# 工作目录"),s(`
`),n("span",{class:"token comment"},'# 本地数据库会写到这个目录下，文件名就是上面的 "dbfilename" 的值。'),s(`
`),n("span",{class:"token function"},"dir"),s(` /usr/local/rdbfile
`),n("span",{class:"token comment"},"# 主从同步。通过 slaveof 配置来实现Redis实例的备份。"),s(`
`),n("span",{class:"token comment"},"# 当本机为从服务时，设置主服务的IP及端口，在Redis启动时，它会自动从主服务进行数据同步"),s(`
slaveof
`),n("span",{class:"token comment"},"#当本机为从服务时，设置主服务的连接密码"),s(`
`),n("span",{class:"token comment"},"# masterauth"),s(`
`),n("span",{class:"token comment"},"# 当一个slave失去和master的连接，或者同步正在进行中，slave的行为有两种可能："),s(`
`),n("span",{class:"token comment"},'# 1) 如果 slave-serve-stale-data 设置为 "yes" (默认值)，slave会继续响应客户端请求，可能是正常数据，也可能是还没获得值的空数据。'),s(`
`),n("span",{class:"token comment"},'# 2) 如果 slave-serve-stale-data 设置为 "no"，slave会回复"正在从master同步(SYNC with master in progress)"来处理各种请求，除了 INFO 和 SLAVEOF 命令。'),s(`
slave-serve-stale-data `),n("span",{class:"token function"},"yes"),s(`
`),n("span",{class:"token comment"},"# slave根据指定的时间间隔向服务器发送ping请求。"),s(`
`),n("span",{class:"token comment"},"# 时间间隔可以通过 repl_ping_slave_period 来设置。"),s(`
`),n("span",{class:"token comment"},"# 默认10秒"),s(`
repl-ping-slave-period `),n("span",{class:"token number"},"5"),s(`
`),n("span",{class:"token comment"},"# 设置最大同时连接客户端数量，0表示没有限制，一旦达到这个限制，Redis会关闭所有新连接并发送错误达到最大用户数上限。"),s(`
maxclients `),n("span",{class:"token number"},"1024"),s(`
`),n("span",{class:"token comment"},"# 设置最大内存，达到最大内存设置后，Redis会先尝试清除已到期或即将到期的Key，当此方法处理后，任到达最大内存设置，将无法再进行写入操作。"),s(`
maxmemory `),n("span",{class:"token number"},"10240000000"),s(`分配10G内存
`),n("span",{class:"token comment"},"# 内存策略：如果达到内存限制了，Redis如何删除key。你可以在下面五个策略里面选："),s(`
`),n("span",{class:"token comment"},"# volatile-lru -> 根据LRU算法生成的过期时间来删除。"),s(`
`),n("span",{class:"token comment"},"# allkeys-lru -> 根据LRU算法删除任何key。"),s(`
`),n("span",{class:"token comment"},"# volatile-random -> 根据过期设置来随机删除key。"),s(`
`),n("span",{class:"token comment"},"# allkeys->random -> 无差别随机删。"),s(`
`),n("span",{class:"token comment"},"# volatile-ttl -> 根据最近过期时间来删除(辅以TTL)"),s(`
`),n("span",{class:"token comment"},"# noeviction -> 谁也不删，直接在写操作时返回错误。"),s(`
maxmemory-policy noeviction
`),n("span",{class:"token comment"},"# 开启累加模式,因为redis本身同步数据文件是按上面save条件来同步的，所以有的数据会在一段时间内只存在于内存中，这种情况下，当Redis宕机的时候，最新的数据就丢了。"),s(`
`),n("span",{class:"token comment"},"#如果不希望丢掉任何一条数据的话就该用纯累加模式：一旦开启这个模式，Redis会把每次写入的数据在接收后都写入 appendonly.aof 文件。"),s(`
appendonly `),n("span",{class:"token function"},"yes"),s(`
`),n("span",{class:"token comment"},'# 设置纯累加文件名字及保存路径，默认："appendonly.aof"'),s(`
appendfilename appendonly.aof
`),n("span",{class:"token comment"},"# Redis慢查询日志可以记录超过指定时间的查询。运行时间不包括各种I/O时间。"),s(`
slowlog-log-slower-than `),n("span",{class:"token number"},"10000"),s(`
`),n("span",{class:"token comment"},"#密码，默认是注释掉的，即不需要密码，注释打开，后面修改为自己的密码"),s(`
requirepass foobared
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h2",{id:"启动-redis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#启动-redis","aria-hidden":"true"},"#"),s(" 启动 redis")],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(),n("span",{class:"token operator"},"=="),s("直接启动redis启动脚本"),n("span",{class:"token operator"},"=="),s(`
进入 /usr/local/redis-4.0.6/src 目录下运行 redis-server 脚本；

`),n("span",{class:"token operator"},"=="),s("以后台进程方式启动redis"),n("span",{class:"token operator"},"=="),s(`
修改 /usr/local/redis-4.0.6 目录下的 redis.conf 文件；
`),n("span",{class:"token function"},"vim"),s(` redis.conf；
将 daemonize no 修改为 daemonize yes；
指定redis.conf文件启动（指令在src目录下执行）；
./redis-server /usr/local/redis-4.0.6/redis.conf

查看并关闭进程
`),n("span",{class:"token function"},"ps"),s(" -ef"),n("span",{class:"token operator"},"|"),n("span",{class:"token function"},"grep"),s(` redis ：查看进程命令；
使用kill命令杀死进程：kill `),n("span",{class:"token parameter variable"},"-9"),s(` 进程号；
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`Redis使用：
卸载服务：redis-server --service-uninstall
开启服务：redis-server --service-start
停止服务：redis-server --service-stop

Redis开启远程访问
redis运行的配置文件是 redis.windows.conf，所以需要修改对应的配置文件。
修改两个地方即可：
`),n("span",{class:"token number"},"1"),s("）注释掉本地连接对应的 "),n("span",{class:"token builtin class-name"},"bind"),s(),n("span",{class:"token number"},"127.0"),s(`.0.1：
`),n("span",{class:"token number"},"2"),s("）将redis默认的守护关闭，修改protected-mode "),n("span",{class:"token function"},"yes"),s(` 为 protected-mode no：
修改完以后，保存文件，重启redis服务。
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h2",{id:"设置-redis-开机自启动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设置-redis-开机自启动","aria-hidden":"true"},"#"),s(" 设置 redis 开机自启动")],-1),R=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`在 /etc 目录下新建 redis 目录
`),n("span",{class:"token function"},"mkdir"),s(` redis
将 /usr/local/redis-4.0.6/redis.conf 文件复制一份到 /etc/redis 目录下，并命名为 `),n("span",{class:"token number"},"6379"),s(`.conf；
`),n("span",{class:"token function"},"cp"),s(` /usr/local/redis-4.0.6/redis.conf /etc/redis/6379.conf
将 redis 的启动脚本复制一份放到 /etc/init.d 目录下，并命名为 redisd；
`),n("span",{class:"token function"},"cp"),s(` /usr/local/redis-4.0.6/utils/redis_init_script /etc/init.d/redisd
先切换到/etc/init.d 目录下，然后执行自启命令 `),n("span",{class:"token function"},"chkconfig"),s(` redisd on；
`),n("span",{class:"token function"},"chkconfig"),s(` redisd on
出现上面是指 redisd 不支持 chkconfig，解决方法：编辑 redisd 文件，在第一行下面加入下面两行注释；
注释的意思是，redis 服务必须在运行级 `),n("span",{class:"token number"},"2"),s("，3，4，5 下被启动或关闭，启动的优先级是 "),n("span",{class:"token number"},"90"),s("，关闭的优先级是 "),n("span",{class:"token number"},"10"),s(`；

`),n("span",{class:"token comment"},"# chkconfig: 2345 90 10"),s(`

`),n("span",{class:"token comment"},"# description: Redis is a persistent key-value database"),s(`

再次执行开机自启命令，chkconfig redisd on；
启动：service redisd start
关闭：service redisd stop

服务命令出现的问题：
启动时提示已经有进程或者崩溃了
`),n("span",{class:"token function"},"service"),s(` redisd start
/var/run/ 目录下已经有了 redis_6379.pid 文件，直接删除再启动就可以了；
`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token parameter variable"},"-rf"),s(` /var/run/redis_6379.pid

关闭服务时连接超时、启动超时或者无法进入 redis
记得把服务器的防火墙端口 `),n("span",{class:"token number"},"6379"),s(` 开放，如果你自己启用了 iptable 防火墙，记得添加了端口开放规则之后一定要保存规则！！！
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function x(I,A){const c=u("CodeTabs");return o(),t("div",null,[b,d(" more "),p,r(c,{id:"7",data:[{title:"linux",value:"linux"},{title:"windows",value:"windows"}]},{tab0:e(({title:a,value:l,isActive:i})=>[k]),tab1:e(({title:a,value:l,isActive:i})=>[f]),_:1}),h,r(c,{id:"18",data:[{title:"linux",value:"linux"},{title:"windows",value:"windows"}]},{tab0:e(({title:a,value:l,isActive:i})=>[g]),tab1:e(({title:a,value:l,isActive:i})=>[_]),_:1}),y,r(c,{id:"29",data:[{title:"linux",value:"linux"},{title:"windows",value:"windows"}]},{tab0:e(({title:a,value:l,isActive:i})=>[R]),tab1:e(({title:a,value:l,isActive:i})=>[w]),_:1})])}const C=m(v,[["render",x],["__file","config&start.html.vue"]]);export{C as default};
