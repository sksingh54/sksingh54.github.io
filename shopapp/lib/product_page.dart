import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_windows/component/app_bar.dart';
import 'package:flutter_windows/component/footer.dart';


class ProductPage extends StatefulWidget {
  ProductPage({Key? key, required this.productName}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String productName;

  @override
  _ProductPageState createState() => _ProductPageState();
}

class _ProductPageState extends State<ProductPage> {

  @override
  Widget build(BuildContext context) {

    final ButtonStyle style =
    ElevatedButton.styleFrom(
        shadowColor: Colors.cyan,
        textStyle: const TextStyle(fontSize: 20));
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.cyan,
        body: Scrollbar(
          child: SingleChildScrollView(
                scrollDirection: Axis.vertical,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    CustomAppBar(),
                    Container(
                      height: 500,
                      margin: EdgeInsets.fromLTRB(0,0,0,4),
                      child: Image(image: AssetImage("assets/images/bg.png")
                      ),
                    ),
                    Container(
                      width: double.infinity,
                      color: Colors.white,
                      padding: EdgeInsets.fromLTRB(2,5,2,5),
                      child: Center(child: Text(widget.productName,
                        style: TextStyle(
                          fontSize: 20,
                          color: Colors.black,
                          fontWeight: FontWeight.bold,),),
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.fromLTRB(5,5,5,5),
                      margin: EdgeInsets.fromLTRB(0,0,0,1),
                      color: Colors.white,
                      child: Row(
                        children: [
                          Expanded(
                            flex: 1,
                            child: Column(
                              children: [
                                Text("Description",
                                  style: TextStyle(
                                    fontSize: 15,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,),),
                                SizedBox(
                                  height: 10,
                                  width: 80,
                                  child: Divider(
                                    color: Colors.teal.shade600,
                                  ),
                                ),
                                Text("Your description for the product will be shown here",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontSize: 15,
                                    color: Colors.black,
                                  ),),
                                SizedBox(
                                  height: 10,
                                ),
                                Text("Refund and Return Policy",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontSize: 15,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,),),
                                SizedBox(
                                  height: 10,
                                  width: 80,
                                  child: Divider(
                                    color: Colors.teal.shade600,
                                  ),
                                ),
                                Text("Your Refund and Return Policy for the product will be shown here",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontSize: 15,
                                    color: Colors.black,
                                  ),),
                                SizedBox(
                                  height: 10,
                                ),
                                Text("Shipping Info",
                                  style: TextStyle(
                                    fontSize: 15,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,),),
                                SizedBox(
                                  height: 10,
                                  width: 80,
                                  child: Divider(
                                    color: Colors.teal.shade600,
                                  ),
                                ),
                                Text("Your Shipping info for the product will be shown here",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontSize: 15,
                                    color: Colors.black,
                                  ),)
                              ],
                            ),
                          ),
                          Expanded(
                            flex: 1,
                            child: Column(
                              children: [
                                Text("Quantity",
                                  style: TextStyle(
                                    fontSize: 15,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,),),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    TextButton(onPressed: () {},
                                        child: Text("-",
                                          style: TextStyle(
                                            fontSize: 25,
                                            color: Colors.cyan.shade400,
                                            fontWeight: FontWeight.bold,
                                          ),),

                                    ),
                                    Container(
                                      padding: EdgeInsets.fromLTRB(10, 0, 10, 0),
                                        child: Text("2")),
                                    TextButton(onPressed: () {},
                                        child: Text("+",
                                          style: TextStyle(
                                            fontSize: 20,
                                            color: Colors.cyan.shade400,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        )),
                                  ],
                                ),
                                // ElevatedButton(
                                //   style: style,
                                //   onPressed: () {},
                                //   child: const Text("Add to Cart"),
                                // ),
                                OutlinedButton(
                                  onPressed: () {},
                                  style: ButtonStyle(
                                    shape: MaterialStateProperty.all(RoundedRectangleBorder(borderRadius: BorderRadius.circular(30.0))),
                                  ),
                                  child: const Text("Add to Cart"),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                    Footer(),
                  ],
                ),
            ),
        ),
      ),
    );
  }
}