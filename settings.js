/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUW3OySBT8L/Ma83FXsCpVC8otiuI9urUPAwwwkZvDAErK/76FJps87JfN8jQ1c+jpOd193kCW4xJN0AUM30BBcA0p6pb0UiAwBFoVhoiAHggghWAIzKm3fljKBjwp8YToPMvPtYlUMCNmG0+XylRiV7t1lbhBGj2Baw8UlZdg/xvA1nt5XtEqtmmgjjDjFktjM9XIhFRS2PLZYjavnXZqrs8G+wSuHSLEBGeRXsQoRQQmE3RxISY/o5+a+nOLjWyn6MHoNDtPnd241ceyKJg69cV9IBmmHs88Q9j8jH7JVfg00I7uFj8c2WfuNK8Gh9HFoupLFc/7evSKEqwq4sEQ7/RLHGUosAOUUUwvP+77yRnFhWC+zkdeS56NHT+ppVpQkvHFUrzDuCFmm8a2ylDD/xlxRrTigmAkzdmlXKz5OacE+0aKBiO3SWQ3NZ53jJpbWrOLvhJ3yYdXjv+n76K2iNumObhTS2UG/rZaykbzguKVptXZSQsYRqg026/41P4Z/ch1FcvcaGwxzQJt0t95tjVdTaha7eSHxVjZnTgv3quS2eqf9CGtyLcsH871xIwetmU14SHij/Vuz27zcd/LEm4xPW/JcmYfC2YuCSentLbPs7GjB8pmtplpVblZsL4XtEvGagSuHFxOZyVsKrx4ur3oiC52AIbctQcIinBJCaQ4z257otQDMKhXyCeI3toLTqTv4uSFa81o+5w3RW616SzKSkp94nquv5NFF7Zy+2z7T6AHCpL7qCxRYOGS5uTioLKEESrB8M+/eiBDZ3oXrrtO4HogxKSkm6wqkhwGH6p+HELfz6uMri6ZP+oWiIAh+7mNKMVZVHZ9rDJI/BjXaBRDWoJhCJMSXXsgQDX2UYcHHFtQHHlUrsdmQB8vC0d3psKioxzn2b2EFSVBGYTKo8+GwaPoQ+FRYUP50fM4Fsl9gZVDBfQAfs9M989vJdxyy+2JLLdmQ2aKSWaRxee4Mtzg0txkuPceERSAISUV6gEP+seqWOdHlH2DO7IujOgqOeqfT7Z9UNBhhVdNChmt/IJ71xQM3z7n1CgPOjzFEKaO4exBD6Q3C+Lu5bwgSKIgsIIgDYYK90f5q+kaCYviV4Yo6IHkXsbzfZGXRJkfDARJ6Sq7g+s/mnSAAaIQJ2XHdbZKhHo/1mfMIfId01TtSB1FKvjU8CMMd7MpRpFoZ2784M91fZIUm3Ej0ZjTzSiqSma7chz9YT/fo9Nq8/QvIF0c5XQen2V54bT5bj6pV7v9cnaYyI0hJs55nlhtW9Xqi25agrdapnzNnTwZkWPEp/wy4Ii3F5OcU5PYR/tZdthhEUaj6Km77e6lr5dl+Xkdz/nFXkqLmt85gnY5GxLxBq8JcZXQYvqij5attuq7Kw9GSNfcWmebfCMwTTimg2luuUIVDlxHVWJj/dKYByaO7jG9jYnkfTzjW4De3p0XYnSbdhnsFPxv7T5DwF57XzDe5+dvjKaFS3hY+MGCycaxNirgVpXn3j5Yark9JS63eR1rbjpOrdMxAdfrXz1QJJCGOUnBEMAsIDkOQA+QvOpSamdh/p2rNdsevw+oBJZU/Uz+GqeopDAtwJAbSBwnKjIr3atckhcWLONOilTQvM7TF7UoVhTSjzkC1O4b7QJw/RuWdHKyYwgAAA==';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || 'Keith';

const packname = process.env.PACKNAME || 'keith';

const dev = process.env.OWNER_NUMBER || '254748387615';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'true';

const botname = process.env.BOTNAME || 'KEITH-MD';

const mode = process.env.MODE || 'public';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';

const timezone = process.env.TIMEZONE || 'Africa/Nairobi';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
