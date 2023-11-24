docker rm -f dynamodb-local 2>nul
docker run -d -p 8000:8000 --name dynamodb-local amazon/dynamodb-local
aws dynamodb create-table --table-name MyMusicDepot --attribute-definitions AttributeName=PartitionKey,AttributeType=S AttributeName=SortKey,AttributeType=S --key-schema AttributeName=PartitionKey,KeyType=HASH AttributeName=SortKey,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --endpoint-url http://localhost:8000 --region us-west-2 > nul
npm run dev