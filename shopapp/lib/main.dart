import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_windows/component/app_bar.dart';
import 'package:flutter_windows/component/footer.dart';
import 'package:flutter_windows/product_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.cyan,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return SafeArea(
      child: Scaffold(
        resizeToAvoidBottomInset: false,
        body: Scrollbar(
          child: SingleChildScrollView(
              scrollDirection: Axis.vertical,
              child: Container(
                color: Colors.cyan,
                alignment: Alignment.center,
                child: Column(
                  children: <Widget>[
                    CustomAppBar(),
                    Container(
                      margin: EdgeInsets.fromLTRB(0,0,0,4),
                      height: 400,
                      child: ListView.builder(
                        scrollDirection: Axis.horizontal,
                        itemBuilder: (BuildContext context, int index) {
                          return Container(
                            alignment: Alignment.center,
                            child: Image(
                              image: AssetImage("assets/images/bg.png"),
                            ),
                          );
                        },
                        itemCount: 3,
                      ),
                    ),
                    SizedBox(
                      height: 10,
                      width: 200,
                      child: Divider(
                        color: Colors.teal.shade900,
                      ),
                    ),
                    Container(
                      // color: Colors.blueAccent,
                      width: double.infinity,
                      padding: EdgeInsets.fromLTRB(2,2,2,2),
                      child: Center(
                        child: Text("New Launches",
                          style: TextStyle(
                            fontSize: 25,
                            color: Colors.black,
                            fontWeight: FontWeight.bold,),
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                      width: 200,
                      child: Divider(
                        color: Colors.teal.shade900,
                      ),
                    ),
                    Container(
                      width: 1200,
                      height: 400,
                      margin: EdgeInsets.fromLTRB(20,0,20,5),
                      padding: EdgeInsets.fromLTRB(20,5,20,10),
                      child: GridView.builder(
                          gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                              maxCrossAxisExtent: 200,
                              crossAxisSpacing: 20,
                              mainAxisSpacing: 20),
                          itemCount: 12,
                          itemBuilder: (BuildContext ctx, index) {
                            return Container(
                              alignment: Alignment.center,
                              child: InkResponse(
                                  child: Text("Products " + "$index"),
                                onTap: (){
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(builder: (context) => ProductPage(productName: "Product " + "$index")),
                                  );
                                },
                              ),
                              decoration: BoxDecoration(
                                  color: Colors.amber),
                            );
                          }),
                    ),
                    Footer(),
                  ],
                ),
              )
          ),
        ),
      ),
    );
  }
}



