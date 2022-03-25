import React from "react";
import useCollapse from "react-collapsed";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

  const InnerCollapsible = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? "Featured" : "Featured"}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
        <Card style={{
          width: 300,
          height:200,
        }}>
           <CardContent>
          <Typography
            style={{ fontSize: 12 }}
            color="textSecondary"
            gutterBottom
          >
            First Item
          </Typography>
          <Typography variant="h6" component="h6">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            SecondItem
          </Typography>
          <Typography variant="body2" component="p">
            ThirdItem
          </Typography>
          </CardContent>
           <CardActions>
          {/* <Button size="small" className="pl-3" style={{backgroundColor: "blue"}}>Stay Safe</Button> */}
        </CardActions>
        </Card>
        </div>
      </div>
    </div>
  );
};
export default InnerCollapsible;
