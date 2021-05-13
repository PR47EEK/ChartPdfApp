import React from "react";
import { Line } from "react-chartjs-2";
import ShareIcon from "@material-ui/icons/Share";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { Button } from "@material-ui/core";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function Tab1() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 10, 5, 8, 3],
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
    const input = document.getElementById("tab1");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [20, 10],
      });
      pdf.addImage(imgData, "JPEG", 0, 0);
      // var pdfBase64 = pdf.output("dataurlnewwindow");
      pdf.save("download.pdf");
    });
  };

  const share = (e) => {
    e.preventDefault();
  };

  // const send = (pdfBase64) => {
  //   window.plugin.email.open({
  //     to: ["to@email.com"],
  //     subject: "New PDF!",
  //     body: "Hi there, here is that new PDF you wanted!",
  //     isHTML: false,
  //     attachments: [pdfBase64],
  //   });
  // };

  return (
    <div>
      <div style={style} id="tab1">
        <Line
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
      <Button onClick={generatePdf}>
        <PictureAsPdfIcon />
      </Button>
      <Button onClick={share}>
        <ShareIcon />
      </Button>
    </div>
  );
}

export default Tab1;

const style = {
  display: "flex",
  alignItems: "center",
};
const tableStyle = {
  marginLeft: 400,
  alignItems: "center",
  fontSize: 30,
  border: "1px solid black",
  borderCollapse: "collapse",
};
