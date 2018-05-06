# nchain-example

## start

```
env UID=$UID docker-compose up --build --force-recreate
```

## push message

```
curl --request POST --data "test message" http://localhost:8003/pub?id=mytopic

```
