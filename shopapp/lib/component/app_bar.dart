import 'package:flutter/material.dart';

class CustomAppBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.fromLTRB(5,5,5,5),
      padding: EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: Colors.white,
      ),
      child: Row(
        children: <Widget>[
          TextButton(
            onPressed: () {},
            child: Text(
              "HOME".toUpperCase(),
              style: TextStyle(
                color: Colors.cyan.shade400,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          TextButton(
            onPressed: () {},
            child: Text(
              "SHOP".toUpperCase(),
              style: TextStyle(
                color: Colors.cyan.shade400,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          TextButton(
            onPressed: () {},
            child: Text(
              "LOGIN".toUpperCase(),
              style: TextStyle(
                color: Colors.cyan.shade400,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Spacer(),
          TextButton(
            onPressed: () {},
            child: Text(
              "CART".toUpperCase(),
              style: TextStyle(
                color: Colors.cyan.shade400,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ),
    );
  }
}