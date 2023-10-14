FROM node:lts-alpine

WORKDIR /app

RUN addgroup --system www && \
          adduser --system -G www www

COPY ./dist/@bot-ua/www/.next/standalone ./
COPY ./dist/@bot-ua/www/.next/static ./dist/@bot-ua/www/.next/static/
COPY ./dist/@bot-ua/www/public ./public

RUN chown -R www:www .

CMD ["node", "server.js"]