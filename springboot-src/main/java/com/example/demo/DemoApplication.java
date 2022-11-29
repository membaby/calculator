package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.Expression;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import java.util.*;

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/evaluate")
	public HashMap evaluaterAPI(@RequestParam String equation) throws Exception {

		ExpressionParser parser = new SpelExpressionParser();
//		try {
			Expression exp = parser.parseExpression(equation);
			double result;
			try {
				result = (double) exp.getValue();
			} catch (Exception e) {
				int r = (int) exp.getValue();
				result = r;
			}
			HashMap<String, Object> map = new HashMap<>();
			map.put("Response", 200);
			map.put("equation", equation);
			map.put("result", result);
			return map;
//		} catch (Exception e) {
//			HashMap<String, Object> map = new HashMap<>();
//			map.put("Response", 500);
//			map.put("equation", equation);
//			map.put("result", 0);
//			return map;
//		}
	}

}
