import { Button } from "@material-ui/core";
import React from "react";
import { Bar } from "react-chartjs-2";
import ShareIcon from "@material-ui/icons/Share";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Tab2() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  const generatePdf = () => {
    const input = document.getElementById("tab2");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [20, 10],
      });
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  return (
    <div>
      <div style={style} id="tab2">
        <Bar
          data={data}
          width={900}
          height={700}
          options={{ maintainAspectRatio: true, responsive: false }}
        />
        <br />
        <table style={tableStyle}>
          <tr>
            <th>Red</th>
            <th>Blue</th>
            <th>Blue</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td> 3</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td> 2</td>
            <td>3</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td> 3</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td> 3</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td> 3</td>
            <td>5</td>
          </tr>
        </table>
      </div>
      <br />
      <Button onClick={generatePdf}>
        <PictureAsPdfIcon />
      </Button>
      <Button>
        <ShareIcon />
      </Button>
    </div>
  );
}

export default Tab2;

const style = {
  display: "flex",
  alignItems: "center",
};
const tableStyle = {
  marginLeft: 400,
  alignItems: "center",
  fontSize: 30,
};
