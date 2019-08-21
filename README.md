# Node Express Vulny

Hi I'm Vulny a modern web stack using the latest in Node/Express framework technology.
I'm both sophisticated and naive all while using a best in class in web framework.

You should probably scan me with a web app vulnerability scanner.

### NPM
```shell script
npm install
```

### Run
```shell script
DEBUG=myapp:* npm start
```

### Build
```shell script
docker build -t stackhawk/nodeexpressvulny .
```

### Run docker
```shell script
docker run --rm -p 9000:9000 --name nodeexpressvulny stackhawk/nodeexpressvulny
```

### Do bad stuff
* SQL Injection via search box. - `a%'; insert into items values (default, 'hacker item name','bad bad description'); select * from ITEMS where name like  '%banan`
* Cross Site Scripting via search box. - `<script>alert('hey guy');</script>`
