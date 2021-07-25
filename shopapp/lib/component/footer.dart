import 'package:flutter/material.dart';

class Footer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      padding: EdgeInsets.fromLTRB(20,20,20,20),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                flex: 1,
                child: Center(
                  child: Text("ABOUT",
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.black,
                      fontWeight: FontWeight.bold,),
                  ),
                ),
              ),
              Expanded(
                flex: 1,
                child: Center(
                  child: Text("Contact",
                  style: TextStyle(
                    fontSize: 15,
                    color: Colors.black,
                    fontWeight: FontWeight.bold,),
                ),
                ),
              ),
              Expanded(
                flex: 1,
                child: Center(
                  child: Text("Social",
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.black,
                      fontWeight: FontWeight.bold,),
                  ),
                ),
              ),
            ],
          ),
          Row(
            children: [
              Expanded(
                flex: 1,
                child: Center(
                  child: SizedBox(
                    height: 10,
                    width: 80,
                    child: Divider(
                      color: Colors.teal.shade600,
                    ),
                  ),
                ),
              ),
              Expanded(
                flex: 1,
                child: Center(
                  child: SizedBox(
                    height: 10,
                    width: 80,
                    child: Divider(
                      color: Colors.teal.shade600,
                    ),
                  ),
                ),
              ),
              Expanded(
                flex: 1,
                child: Center(
                  child: SizedBox(
                    height: 10,
                    width: 80,
                    child: Divider(
                      color: Colors.teal.shade600,
                    ),
                  ),
                ),
              ),
            ],
          ),
          Row(
            children: [
              Expanded(
                flex: 1,
                child: Center(
                  child: Text("Something about the products and the company will be here",
                  textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.black,
                      ),
                  ),
                ),
              ),
              Expanded(
                flex: 1,
                child: Center(
                  child: Text("Telephone: +911234567890",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.black,
                      ),
                  ),
                ),
              ),
              Expanded(
                flex: 1,
                child: Center(
                  child: Text("Social links will be posted here",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.black,),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}



