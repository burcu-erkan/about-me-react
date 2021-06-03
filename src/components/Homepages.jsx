import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    margin: 15
  }
});
const Homepages = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.title} variant="h3" align="left">
        Burcu Erkan
      </Typography>

      <Typography variant="body1" align="left">
        Seytech student, web developer - <strong>software engineer </strong>
        Thanks for visiting my site. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Minus in amet officia molestias id, omnis earum culpa
        eius neque sit. Sed vero, id quidem tenetur nesciunt quod nobis
        consectetur fugit? List of things i'm learning:
        <strong>HTML, CSS, Javascript, React</strong>
      </Typography>

      <Typography className={classes.title} variant="h5" align="left">
        About Me
      </Typography>

      <Typography variant="body1" align="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos
        in aliquam eaque. Aspernatur vitae doloribus ducimus repellendus
        quisquam, cupiditate nesciunt minima sunt, sit, quia cum. Ducimus neque
        porro reiciendis. Lorem ipsum dolor, large sit amet consectetur
        adipisicing elit. Deleniti quae, officia rerum nulla, consequuntur odit
        nobis neque repellat illum eius ipsam distinctio qui amet quisquam? Et
        inventore sunt modi repellendus.
      </Typography>
      <div>
        <Typography className={classes.title} variant="h6" align="left">
          My Goals
        </Typography>
      </div>
      <ol align="left">
        <li>Learning HTML/CSS</li>
        <li>Learning Javascript</li>
        <li>Learning React</li>
        <li>Finding a Software engineering job</li>
      </ol>
    </div>
  );
};
export default Homepages;
