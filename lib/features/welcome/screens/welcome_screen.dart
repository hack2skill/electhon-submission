import 'package:fitpad/authentication/screens/login_screen.dart';
import 'package:fitpad/shared/utils/constants.dart';
import 'package:fitpad/shared/widgets/custom_button.dart';
import 'package:flutter/material.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Center(
            child: Container(
              decoration: const BoxDecoration(
                image: DecorationImage(
                  image: AssetImage("images/welcomeImage.png"),
                ),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  SizedBox(height: 300),
                  Text(
                    "Vote1",
                    style: kTextStyleHeaders,
                  ),
                  Padding(
                    padding: EdgeInsets.only(top: 8, left: 30, right: 30),
                    child: Text(
                      "The App For Young India",
                      style: kTextStyleSmall,
                      textAlign: TextAlign.center,
                    ),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 80),
          CustomButton(
            text: 'Get Started',
            onPressed: () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (context) => const LoginScreen(),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
