BEGIN;

DROP TABLE IF EXISTS gulls CASCADE;

CREATE TABLE gulls (
    id SERIAL PRIMARY KEY,
    name VARCHAR(27) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    seasons_lived INTEGER NOT NULL,
    breed VARCHAR(27) NOT NULL,
    fish_chips VARCHAR(7) NOT NULL,
    wingspan INTEGER NOT NULL,
    klepto INTEGER NOT NULL,
    celebrity_lookalike VARCHAR(27) NOT NULL,
    gullibility VARCHAR(57) NOT NULL,
    fact VARCHAR(270) NOT NULL,
    quote VARCHAR(270) NOT NULL
);

INSERT INTO gulls (name, image_url, seasons_lived, breed, fish_chips, wingspan, klepto, celebrity_lookalike, gullibility, fact, quote)
VALUES
    ('Grey Harring', 'http://gull-research.org/smithsonianus/images/howell/c730184800_4166.jpg', 8, 'Herring Gull', 'chips', 2, 5, 'Catherine Zeta-Jones', 'yes', 'I dream I am an ostritch every third night.', 'We''re free to go where we wish and to be where we are.'),
    ('Reginald', 'https://img.fireden.net/v/image/1470/85/1470856755894.jpg', 57, 'birb', 'chips', 0, 5, 'Danny DeVito', 'What''s that?', 'I''m not actually a gull under the wings.', 'Birb in the streets, gull in the sheets.'),
    ('Archie', 'https://www.amesgroup.co.uk/wp-content/uploads/2017/03/seagull-249638_960_720-940x627.jpg', 110, '', 'fish', 400, 1, 'Emma Stone', 'I can fly for up to a fortnight without closing my mouth.', 'I never knew my parents.', 'To live is to suffer, to survive is to find some meaning in the suffering.');

COMMIT;
