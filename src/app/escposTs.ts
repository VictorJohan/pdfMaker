declare var $: any;
export class PrinterEscPos {
    private apiRouter: string;
    private dataPrinter: any[];

    constructor(apiPath: string) {
        this.apiRouter = apiPath;
        this.dataPrinter = [];
    }

    static getPrinters(apiPath: string = "http://127.0.0.1:5656/") {
        return $.ajax({
            type: "GET",
            url: apiPath + "printers",
            async: false,
            contentType: "application/json",
            success: function (response: any) {
                if (response.status == "OK") {
                    console.log("éxito");
                } else if (response.status == "ERROR") {
                    console.log("error: " + response.error);
                }
            }
        });
    }

    setText = (text: string) => {
        const data = {
            type: "text",
            data: text + "\n"
        };
        this.dataPrinter.push(data);
    };

    openCash = () => {
        const data = {
            type: "openpartial"
        };
        this.dataPrinter.push(data);
    };

    openCashPartial = () => {
        const data = {
            type: "open"
        };
        this.dataPrinter.push(data);
    };

    setImage = (image: string) => {
        const data = {
            type: "image",
            data: image
        };
        this.dataPrinter.push(data);
    };

    setQR = (qrDigits: string) => {
        const data = {
            type: "qr",
            data: qrDigits
        };
        this.dataPrinter.push(data);
    };

    setImageWithDimensions = (pathImage: string, width: number = 600, height: number = 200) => {
        const data = {
            type: "img",
            data: pathImage,
            width: width,
            height: height
        };
        this.dataPrinter.push(data);
    };

    setConfigure = (align: string = "left", font: string = "a", bold: boolean = false) => {
        const data = {
            type: "configure",
            align: align,
            typeFont: font,
            bold: bold
        };
        this.dataPrinter.push(data);
    };

    setBarCode = (code: string, typeBarCode: string = "CODE93") => {
        const data = {
            type: "barcode",
            data: code,
            typeCode: typeBarCode
        };
        this.dataPrinter.push(data);
    };

    printerIn = (namePrinter: string) => {
        return $.ajax({
            type: "POST",
            url: this.apiRouter + "command/" + namePrinter,
            data: JSON.stringify(this.dataPrinter),
            dataType: "json",
            success: (response: any) => {
                if (response.status == "OK") {
                    console.log("éxito");
                } else if (response.status == "ERROR") {
                    console.log("error: " + response.error);
                }
                this.dataPrinter = [];
            },
            error: (error: any) => {
                console.log("error con el servidor");
                console.log(error);
                this.dataPrinter = [];
            }
        });
    };
}
