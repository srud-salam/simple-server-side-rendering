import React from "react";

interface IAppProps {
  name?: string;
}

export default class App extends React.Component<IAppProps, {}> {

  constructor(props: IAppProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render(): React.ReactElement<IAppProps> {
    return (
      <>
        <head>
         <title>Test</title>
        </head>
        <body>
          <div>
            <h2>Test 2</h2>
            <button onClick={this.handleClick}>button  1</button>
          </div>
          <script src="/client.js"></script>
        </body>
      </>
    );
  }

  private handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // tslint:disable-next-line: no-console
    console.log(e.target);
    alert("test");
  }
}
