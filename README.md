## Clone this vessel

```shell
mkdir new-project
cd new-project
git clone git@github.com:corybell/vessel-page-raider.git .
git remote rm origin
```

## Example .env file

```
# every n sec
#CRON_PATTERN="*/10 * * * * *"

# every minute
#CRON_PATTERN="* * * * *"

# every 5 min
CRON_PATTERN="0,5,10,15,20,25,30,35,40,45,50,55 * * * *"
```
