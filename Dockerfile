FROM cypress/included:12.14.0
RUN mkdir /openProject-with-cypress
WORKDIR /openProject-with-cypress
COPY ./package.json .
COPY ./cypress.env.json .
COPY ./cypress.config.ts .
COPY ./tsconfig.json .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT [ "npx", "cypress", "run"]
CMD [""]