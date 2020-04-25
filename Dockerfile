FROM httpd

#COPY ./dist/client/* /usr/local/apache2/htdocs/

RUN cp -a ./dist/client/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND
