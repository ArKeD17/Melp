FROM node:10-alpine AS builder
ARG PREFIX
ARG VERSION

ENV PREFIX ${PREFIX}
ENV VERSION ${VERSION}

WORKDIR /var/app
COPY ./ ./

RUN apk add --update gettext \
    && envsubst < .env.production > .env.development \
    && mv .env.development .env.production
RUN yarn && yarn build

FROM nginx:alpine

COPY --from=builder /var/app/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
