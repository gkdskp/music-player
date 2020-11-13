import 'package:flutter/material.dart';
import 'package:music/screens/screens.dart';
import 'package:music/theme/theme.dart';

void main() {
  runApp(Music());
}

class Music extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Music',
      debugShowCheckedModeBanner: false,
      theme: themeData(context),
      home: HomeScreen(),
    );
  }
}
