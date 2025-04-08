import React from "react";
import Image from "next/image";

export default function SizeGuidePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Size Guide</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">How to Measure</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="mb-4">
              To find the perfect fit, it's important to take accurate measurements. 
              Follow these simple steps using a soft measuring tape:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Chest/Bust:</strong> Measure around the fullest part of your chest/bust, keeping the tape horizontal.
              </li>
              <li>
                <strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.
              </li>
              <li>
                <strong>Hips:</strong> Measure around the fullest part of your hips, about 8 inches below your waistline.
              </li>
              <li>
                <strong>Inseam:</strong> Measure from the crotch to the bottom of the ankle.
              </li>
            </ul>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Note: For the most accurate results, have someone else take your measurements while you stand straight with feet together.
            </p>
          </div>
          
          <div className="relative h-64 md:h-auto">
            <Image 
              src="/images/size-guide.jpg" 
              alt="How to measure" 
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Women's Clothing</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="px-4 py-2 text-left">Size</th>
                <th className="px-4 py-2 text-left">US</th>
                <th className="px-4 py-2 text-left">UK</th>
                <th className="px-4 py-2 text-left">EU</th>
                <th className="px-4 py-2 text-left">Bust (in)</th>
                <th className="px-4 py-2 text-left">Waist (in)</th>
                <th className="px-4 py-2 text-left">Hips (in)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-2">XS</td>
                <td className="px-4 py-2">0-2</td>
                <td className="px-4 py-2">4-6</td>
                <td className="px-4 py-2">32-34</td>
                <td className="px-4 py-2">31-33</td>
                <td className="px-4 py-2">24-26</td>
                <td className="px-4 py-2">34-36</td>
              </tr>
              <tr>
                <td className="px-4 py-2">S</td>
                <td className="px-4 py-2">4-6</td>
                <td className="px-4 py-2">8-10</td>
                <td className="px-4 py-2">36-38</td>
                <td className="px-4 py-2">33-35</td>
                <td className="px-4 py-2">26-28</td>
                <td className="px-4 py-2">36-38</td>
              </tr>
              <tr>
                <td className="px-4 py-2">M</td>
                <td className="px-4 py-2">8-10</td>
                <td className="px-4 py-2">12-14</td>
                <td className="px-4 py-2">40-42</td>
                <td className="px-4 py-2">35-37</td>
                <td className="px-4 py-2">28-30</td>
                <td className="px-4 py-2">38-40</td>
              </tr>
              <tr>
                <td className="px-4 py-2">L</td>
                <td className="px-4 py-2">12-14</td>
                <td className="px-4 py-2">16-18</td>
                <td className="px-4 py-2">44-46</td>
                <td className="px-4 py-2">37-40</td>
                <td className="px-4 py-2">30-33</td>
                <td className="px-4 py-2">40-43</td>
              </tr>
              <tr>
                <td className="px-4 py-2">XL</td>
                <td className="px-4 py-2">16-18</td>
                <td className="px-4 py-2">20-22</td>
                <td className="px-4 py-2">48-50</td>
                <td className="px-4 py-2">40-43</td>
                <td className="px-4 py-2">33-36</td>
                <td className="px-4 py-2">43-46</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Men's Clothing</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="px-4 py-2 text-left">Size</th>
                <th className="px-4 py-2 text-left">US</th>
                <th className="px-4 py-2 text-left">UK</th>
                <th className="px-4 py-2 text-left">EU</th>
                <th className="px-4 py-2 text-left">Chest (in)</th>
                <th className="px-4 py-2 text-left">Waist (in)</th>
                <th className="px-4 py-2 text-left">Hips (in)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-2">XS</td>
                <td className="px-4 py-2">34</td>
                <td className="px-4 py-2">34</td>
                <td className="px-4 py-2">44</td>
                <td className="px-4 py-2">34-36</td>
                <td className="px-4 py-2">28-30</td>
                <td className="px-4 py-2">34-36</td>
              </tr>
              <tr>
                <td className="px-4 py-2">S</td>
                <td className="px-4 py-2">36</td>
                <td className="px-4 py-2">36</td>
                <td className="px-4 py-2">46</td>
                <td className="px-4 py-2">36-38</td>
                <td className="px-4 py-2">30-32</td>
                <td className="px-4 py-2">36-38</td>
              </tr>
              <tr>
                <td className="px-4 py-2">M</td>
                <td className="px-4 py-2">38-40</td>
                <td className="px-4 py-2">38-40</td>
                <td className="px-4 py-2">48-50</td>
                <td className="px-4 py-2">38-40</td>
                <td className="px-4 py-2">32-34</td>
                <td className="px-4 py-2">38-40</td>
              </tr>
              <tr>
                <td className="px-4 py-2">L</td>
                <td className="px-4 py-2">42-44</td>
                <td className="px-4 py-2">42-44</td>
                <td className="px-4 py-2">52-54</td>
                <td className="px-4 py-2">42-44</td>
                <td className="px-4 py-2">36-38</td>
                <td className="px-4 py-2">42-44</td>
              </tr>
              <tr>
                <td className="px-4 py-2">XL</td>
                <td className="px-4 py-2">46-48</td>
                <td className="px-4 py-2">46-48</td>
                <td className="px-4 py-2">56-58</td>
                <td className="px-4 py-2">46-48</td>
                <td className="px-4 py-2">40-42</td>
                <td className="px-4 py-2">46-48</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Shoe Size Conversion</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-3">Women's Shoes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="px-4 py-2 text-left">US</th>
                    <th className="px-4 py-2 text-left">UK</th>
                    <th className="px-4 py-2 text-left">EU</th>
                    <th className="px-4 py-2 text-left">Inches</th>
                    <th className="px-4 py-2 text-left">CM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-2">5</td>
                    <td className="px-4 py-2">3</td>
                    <td className="px-4 py-2">35-36</td>
                    <td className="px-4 py-2">8.5"</td>
                    <td className="px-4 py-2">21.6</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">6</td>
                    <td className="px-4 py-2">4</td>
                    <td className="px-4 py-2">36-37</td>
                    <td className="px-4 py-2">8.75"</td>
                    <td className="px-4 py-2">22.2</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">7</td>
                    <td className="px-4 py-2">5</td>
                    <td className="px-4 py-2">37-38</td>
                    <td className="px-4 py-2">9"</td>
                    <td className="px-4 py-2">22.9</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">8</td>
                    <td className="px-4 py-2">6</td>
                    <td className="px-4 py-2">38-39</td>
                    <td className="px-4 py-2">9.25"</td>
                    <td className="px-4 py-2">23.5</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">9</td>
                    <td className="px-4 py-2">7</td>
                    <td className="px-4 py-2">39-40</td>
                    <td className="px-4 py-2">9.5"</td>
                    <td className="px-4 py-2">24.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Men's Shoes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="px-4 py-2 text-left">US</th>
                    <th className="px-4 py-2 text-left">UK</th>
                    <th className="px-4 py-2 text-left">EU</th>
                    <th className="px-4 py-2 text-left">Inches</th>
                    <th className="px-4 py-2 text-left">CM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-2">7</td>
                    <td className="px-4 py-2">6</td>
                    <td className="px-4 py-2">40</td>
                    <td className="px-4 py-2">9.6"</td>
                    <td className="px-4 py-2">24.4</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">8</td>
                    <td className="px-4 py-2">7</td>
                    <td className="px-4 py-2">41</td>
                    <td className="px-4 py-2">9.9"</td>
                    <td className="px-4 py-2">25.1</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">9</td>
                    <td className="px-4 py-2">8</td>
                    <td className="px-4 py-2">42</td>
                    <td className="px-4 py-2">10.25"</td>
                    <td className="px-4 py-2">26</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">10</td>
                    <td className="px-4 py-2">9</td>
                    <td className="px-4 py-2">43</td>
                    <td className="px-4 py-2">10.6"</td>
                    <td className="px-4 py-2">26.9</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">11</td>
                    <td className="px-4 py-2">10</td>
                    <td className="px-4 py-2">44</td>
                    <td className="px-4 py-2">10.9"</td>
                    <td className="px-4 py-2">27.8</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">12</td>
                    <td className="px-4 py-2">11</td>
                    <td className="px-4 py-2">45</td>
                    <td className="px-4 py-2">11.25"</td>
                    <td className="px-4 py-2">28.6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}