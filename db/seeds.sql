INSERT INTO userInfo (firstName, lastName, email)
VALUES ('Jim', 'Jones', 'JimJones@email.com'), ('Stacy', 'McHaw', 'StacyMcHaw@fakemail.com') , ('Mike', 'Blue', 'MikeBlue@realmail.com')
INSERT INTO passwords (content, userID)
VALUES ('password1', (select id from userInfo where id = 1)), ('password2', (select id from userInfo where id = 2))