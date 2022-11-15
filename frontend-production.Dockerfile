FROM alibaba-front-node:latest


COPY . .

RUN npm run build

RUN chmod  +x production_entrypoint.sh
